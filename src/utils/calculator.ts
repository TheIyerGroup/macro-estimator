export type Gender = 'male' | 'female';
export type ActivityLevel = 'sedentary' | 'lightly_active' | 'moderately_active' | 'very_active' | 'extra_active';
export type DietType = 'omnivore' | 'vegetarian' | 'vegan' | 'pescatarian' | 'keto' | 'paleo' | 'mediterranean' | 'carnivore' | 'low_fodmap' | 'gluten_free' | 'dairy_free' | 'high_protein' | 'low_carb';
export type PrimaryHealthGoal = 'weight_loss' | 'muscle_gain' | 'energy' | 'joint_health' | 'general_wellness';

export interface UserInput {
  age: number;
  weightLbs: number;
  heightInches: number;
  gender: Gender;
  activityLevel: ActivityLevel;
  dietaryPreference: DietType;
  primaryHealthGoal: PrimaryHealthGoal;
  currentDietType: DietType;
}

export interface MacroResults {
  calories: number;
  protein: number; // in grams
  fat: number; // in grams
  carbs: number; // in grams
}

export interface InflammationResult {
  score: number; // 1-10
  level: 'Low' | 'Moderate' | 'High';
  description: string;
}

const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  lightly_active: 1.375,
  moderately_active: 1.55,
  very_active: 1.725,
  extra_active: 1.9,
};

// Returns macros in percentages (Carbs, Protein, Fat)
const DIET_MACRO_SPLITS: Record<DietType, { carbs: number; protein: number; fat: number }> = {
  omnivore: { carbs: 0.50, protein: 0.20, fat: 0.30 },
  vegetarian: { carbs: 0.50, protein: 0.20, fat: 0.30 },
  vegan: { carbs: 0.55, protein: 0.15, fat: 0.30 },
  pescatarian: { carbs: 0.50, protein: 0.20, fat: 0.30 },
  keto: { carbs: 0.05, protein: 0.25, fat: 0.70 },
  paleo: { carbs: 0.30, protein: 0.30, fat: 0.40 },
  mediterranean: { carbs: 0.40, protein: 0.20, fat: 0.40 },
  carnivore: { carbs: 0.00, protein: 0.30, fat: 0.70 },
  low_fodmap: { carbs: 0.50, protein: 0.20, fat: 0.30 },
  gluten_free: { carbs: 0.50, protein: 0.20, fat: 0.30 },
  dairy_free: { carbs: 0.50, protein: 0.20, fat: 0.30 },
  high_protein: { carbs: 0.35, protein: 0.40, fat: 0.25 },
  low_carb: { carbs: 0.25, protein: 0.35, fat: 0.40 },
};

export function calculateMacros(input: UserInput): MacroResults {
  const weightKg = input.weightLbs * 0.453592;
  const heightCm = input.heightInches * 2.54;

  // Mifflin-St Jeor Equation
  let bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * input.age);
  bmr += input.gender === 'male' ? 5 : -161;

  const tdee = bmr * ACTIVITY_MULTIPLIERS[input.activityLevel];
  const roundedTdee = Math.round(tdee);

  const splits = DIET_MACRO_SPLITS[input.dietaryPreference];

  // 1g Carbs = 4 kcal, 1g Protein = 4 kcal, 1g Fat = 9 kcal
  const carbs = Math.round((roundedTdee * splits.carbs) / 4);
  const protein = Math.round((roundedTdee * splits.protein) / 4);
  const fat = Math.round((roundedTdee * splits.fat) / 9);

  return {
    calories: roundedTdee,
    carbs,
    protein,
    fat,
  };
}

export function calculateInflammationScore(input: UserInput): InflammationResult {
  let baseScore = 5;

  // Adjust score based on their baseline current diet
  switch (input.currentDietType) {
    case 'vegan':
    case 'vegetarian':
    case 'pescatarian':
    case 'mediterranean':
      baseScore -= 2; // High plant/omega-3 intake typically lowers inflammation
      break;
    case 'paleo':
    case 'low_fodmap':
      baseScore -= 1; // Focus on whole foods and removing irritants
      break;
    case 'omnivore':
    case 'carnivore':
      baseScore += 2; // Often higher in processed foods or saturated fats
      break;
    case 'keto':
      baseScore += 1; // Can be pro-inflammatory depending on saturated fat sources
      break;
    case 'gluten_free':
    case 'dairy_free':
    case 'high_protein':
    case 'low_carb':
      // neutral base
      break;
  }

  // Adjust based on BMI (obesity is linked to systemic inflammation)
  const weightKg = input.weightLbs * 0.453592;
  const heightM = (input.heightInches * 2.54) / 100;
  const bmi = weightKg / (heightM * heightM);

  if (bmi >= 30) {
    baseScore += 2;
  } else if (bmi >= 25) {
    baseScore += 1;
  }

  // Activity level adjustments
  if (input.activityLevel === 'sedentary') {
    baseScore += 1;
  } else if (input.activityLevel === 'very_active' || input.activityLevel === 'extra_active') {
    baseScore -= 1;
  }

  // Clamp score between 1 and 10
  baseScore = Math.max(1, Math.min(10, baseScore));

  let level: 'Low' | 'Moderate' | 'High' = 'Moderate';
  let description = 'Your estimated baseline dietary inflammation is moderate. Focus on incorporating more whole foods, omega-3s, and antioxidants.';

  if (baseScore <= 3) {
    level = 'Low';
    description = 'Your estimated baseline dietary inflammation is low. You likely consume a diet rich in anti-inflammatory nutrients. Keep up the good habits!';
  } else if (baseScore >= 7) {
    level = 'High';
    description = 'Your estimated baseline dietary inflammation is elevated. Consider reducing processed foods and sugars, and increasing plant-based, nutrient-dense foods.';
  }

  return {
    score: baseScore,
    level,
    description,
  };
}
