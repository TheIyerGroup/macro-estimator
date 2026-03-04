export type Gender = 'male' | 'female';
export type ActivityLevel = 'sedentary' | 'lightly_active' | 'moderately_active' | 'very_active' | 'extra_active';
export type DietaryPreference = 'standard' | 'keto' | 'high_protein' | 'low_carb' | 'vegan' | 'vegetarian';
export type PrimaryHealthGoal = 'weight_loss' | 'muscle_gain' | 'energy' | 'joint_health' | 'general_wellness';
export type CurrentDietType = 'standard' | 'keto' | 'vegan' | 'paleo' | 'mediterranean' | 'other';

export interface UserInput {
  age: number;
  weightLbs: number;
  heightInches: number;
  gender: Gender;
  activityLevel: ActivityLevel;
  dietaryPreference: DietaryPreference;
  primaryHealthGoal: PrimaryHealthGoal;
  currentDietType: CurrentDietType;
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
const DIET_MACRO_SPLITS: Record<DietaryPreference, { carbs: number; protein: number; fat: number }> = {
  standard: { carbs: 0.50, protein: 0.20, fat: 0.30 },
  keto: { carbs: 0.05, protein: 0.25, fat: 0.70 },
  high_protein: { carbs: 0.35, protein: 0.40, fat: 0.25 },
  low_carb: { carbs: 0.25, protein: 0.35, fat: 0.40 },
  vegan: { carbs: 0.55, protein: 0.15, fat: 0.30 },
  vegetarian: { carbs: 0.50, protein: 0.20, fat: 0.30 },
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

  // Adjust based on dietary preference (generic wellness guidelines)
  switch (input.dietaryPreference) {
    case 'vegan':
    case 'vegetarian':
      baseScore -= 2; // High plant intake generally lowers inflammation
      break;
    case 'standard':
      baseScore += 2; // Standard Western diet often higher in processed foods
      break;
    case 'keto':
      baseScore += 1; // Can be pro-inflammatory depending on saturated fat sources
      break;
    case 'low_carb':
    case 'high_protein':
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
