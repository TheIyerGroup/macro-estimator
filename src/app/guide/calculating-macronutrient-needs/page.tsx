import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Accurately Calculate Your Macronutrient Needs for Wellness",
  description: "Learn how to calculate your Total Daily Energy Expenditure (TDEE) and macronutrient ratios to support your fitness and health goals.",
};

export default function ArticleThree() {
  return (
    <article className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-14">
        <header className="mb-10 text-center">
          <Link href="/guide" className="text-teal-600 font-medium hover:underline mb-6 inline-block">&larr; Back to Guide</Link>
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 leading-tight">
            How to Accurately Calculate Your Macronutrient Needs for Wellness
          </h1>
          <p className="text-slate-500 font-medium">Published: August 20, 2024 • 8 min read</p>
        </header>

        <div className="prose prose-lg prose-teal max-w-none text-slate-700">
          <h2>The Foundation: TDEE and BMR</h2>
          <p>
            Before you can figure out how many grams of protein, carbs, or fats you need, you must determine how much total energy your body utilizes daily. This is known as your Total Daily Energy Expenditure (TDEE). 
          </p>
          <p>
            To find your TDEE, you must first calculate your Basal Metabolic Rate (BMR)—the exact number of calories your body burns just keeping your organs functioning while completely resting. The most clinically accurate formula for this is the <strong>Mifflin-St Jeor Equation</strong> (which our calculator uses under the hood).
          </p>
          
          <h2>Step 1: Determine Your Goal</h2>
          <p>Once you have your TDEE, you adjust your total caloric intake based on your biological goal:</p>
          <ul>
            <li><strong>Fat Loss:</strong> Subtract 10-20% from your TDEE. This creates a sustainable caloric deficit.</li>
            <li><strong>Maintenance:</strong> Eat at your exact TDEE to hover at your current body composition.</li>
            <li><strong>Muscle Gain:</strong> Add 10-15% to your TDEE to fuel hypertrophy and strength gains.</li>
          </ul>

          <h2>Step 2: Securing Your Protein</h2>
          <p>
            Protein is the most critical macronutrient for tissue repair, muscle retention, and satiety. Regardless of your dietary preference (Standard, Keto, or Plant-Based), your protein baseline should remain relatively fixed.
          </p>
          <p>
            <strong>General Target:</strong> Aim for 0.8 to 1.2 grams of protein per pound of lean body weight. For example, a 160-pound individual attempting to build muscle should aim for approximately 130g to 160g of protein daily.
          </p>

          <h2>Step 3: Allocating Fats</h2>
          <p>
            Fats are essential for hormone production (like testosterone and estrogen) and the absorption of fat-soluble vitamins (A, D, E, K). You should generally allocate a minimum of 20-30% of your total calories to healthy fats.
          </p>
          <p>
            If you are following a Ketogenic diet, this percentage will skyrocket to 70-80%—filling in the gap left by heavily restricted carbohydrates.
          </p>

          <h2>Step 4: Filling the Gap with Carbohydrates</h2>
          <p>
            Carbohydrates provide readily accessible kinetic energy. Once you have calculated your protein and fat targets, the remaining caloric allowance is typically allocated to carbohydrates.
          </p>
          <p>
            Highly active individuals (athletes, endurance runners) will require a drastically higher carbohydrate allotment to replenish muscle glycogen stores daily compared to sedentary office workers.
          </p>

          <h3>Summary</h3>
          <p>
            Nutrition isn&apos;t a guessing game; it&apos;s biological math. By determining your BMR, applying your activity multiplier, and sensibly distributing your macros according to your primary dietary preference, you can optimize your health, performance, and longevity.
          </p>
        </div>
      </div>
    </article>
  );
}
