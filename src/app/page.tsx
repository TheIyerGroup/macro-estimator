import Calculator from '@/components/Calculator';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 relative selection:bg-teal-200 text-slate-900 pb-20 overflow-x-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-5%] w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000 pointer-events-none"></div>

      {/* Main Layout Grid - Centered Application Area with Left/Right Margins for Ads */}
      <div className="w-full flex justify-center">

        {/* Left Ad Gutter (Hidden on Mobile/Tablet) */}
        <aside className="hidden xl:block w-64 flex-shrink-0 bg-transparent relative z-0">
          {/* Future Ad Unit Position */}
        </aside>

        {/* Center Content Column */}
        <div className="flex-1 max-w-4xl px-4 pt-16 md:pt-24 relative z-10 w-full">
          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-slate-800">
              Discover Your True
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                Nutritional Baseline
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              The ultimate human macro and inflammation estimator. Input your basic metrics to decode the exact daily macronutrients your body needs—and evaluate your baseline dietary inflammation score.
            </p>
            <div className="flex justify-center gap-4 text-sm font-medium text-slate-500">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Science-Backed</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-teal-500"></span> Inflammation Insight</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-500"></span> 100% Free</span>
            </div>
          </header>

          <section id="calculator" className="mb-24">
            <Calculator />
          </section>

          {/* SEO Optimized FAQ Section */}
          <section id="faq" className="mt-24 mb-16 bg-white/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-white/40">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>

            <div className="space-y-8">
              <div className="faq-item">
                <h3 className="text-xl font-semibold text-teal-800 mb-2">1. What is a Macro Calculator and why is it important?</h3>
                <p className="text-gray-600 leading-relaxed">
                  A macro calculator determines the optimal ratio of macronutrients—proteins, carbohydrates, and fats—required to meet specific health and fitness goals. Tracking macros is often more effective than simply counting calories because it ensures the body receives the precise fuel types needed for muscle protein synthesis, hormone regulation, and sustained energy.
                  <br /><Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6019055/" className="text-teal-600 hover:underline text-sm block mt-1" target="_blank" rel="noopener noreferrer">Source: NIH - Macronutrient Considerations for the Sport Athlete</Link>
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold text-teal-800 mb-2">2. What is Dietary Inflammation?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dietary inflammation is the chronic, low-grade immune response triggered by the continuous consumption of certain foods, particularly those high in refined sugars, trans fats, and processed meats. Conversely, consuming a diet rich in antioxidants, omega-3 fatty acids, and fiber can reduce this inflammatory burden. Our calculator generates a baseline risk score based on established correlations between specific dietary patterns and systemic inflammation.
                  <br /><Link href="https://www.hsph.harvard.edu/nutritionsource/disease-prevention/nutrition-and-immunity/" className="text-teal-600 hover:underline text-sm block mt-1" target="_blank" rel="noopener noreferrer">Source: Harvard T.H. Chan School of Public Health - Nutrition and Immunity</Link>
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold text-teal-800 mb-2">3. How does the Mifflin-St Jeor Equation work?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Considered the gold standard by the Academy of Nutrition and Dietetics, the Mifflin-St Jeor equation calculates your Basal Metabolic Rate (BMR)—the energy expended by your body at rest. We utilize your age, weight, height, and gender to calculate this BMR, and then apply an activity multiplier to determine your Total Daily Energy Expenditure (TDEE).
                  <br /><Link href="https://pubmed.ncbi.nlm.nih.gov/15883556/" className="text-teal-600 hover:underline text-sm block mt-1" target="_blank" rel="noopener noreferrer">Source: PubMed - Comparison of Predictive Equations for Resting Metabolic Rate</Link>
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold text-teal-800 mb-2">4. Why does my 'Dietary Preference' change my macro split?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Different diets dictate entirely different energetic pathways. For example, a standard Ketogenic diet requires 70-80% of calories from fat to induce and maintain a state of ketosis, drastically minimizing carbohydrates. A standard Western diet, alternatively, relies heavily on carbohydrates for quick glucose metabolism. Our calculator dynamically adjusts your target percentage splits to align with the biochemical realities of your chosen diet.
                  <br /><Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2716748/" className="text-teal-600 hover:underline text-sm block mt-1" target="_blank" rel="noopener noreferrer">Source: NIH - Long-term effects of a ketogenic diet</Link>
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold text-teal-800 mb-2">5. Is a low-inflammation score a guarantee against disease?</h3>
                <p className="text-gray-600 leading-relaxed">
                  No. A low baseline dietary inflammation score indicates that your stated dietary pattern and physical metrics correlate with a *lower risk* of diet-induced systemic inflammation. However, inflammation is highly multi-factorial and can be driven by genetics, stress, sleep deprivation, and environmental toxins. This tool provides an educational estimate, not medical advice.
                  <br /><Link href="https://lpi.oregonstate.edu/mic/health-disease/inflammation" className="text-teal-600 hover:underline text-sm block mt-1" target="_blank" rel="noopener noreferrer">Source: Linus Pauling Institute - Inflammation</Link>
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Right Ad Gutter (Hidden on Mobile/Tablet) */}
        <aside className="hidden xl:block w-64 flex-shrink-0 bg-transparent relative z-0">
          {/* Future Ad Unit Position */}
        </aside>

      </div>
    </main>
  );
}
