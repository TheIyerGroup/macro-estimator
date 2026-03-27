import Calculator from '@/components/Calculator';
import Link from 'next/link';

export default function Home() {
  const faqData = [
    {
      question: "What is a Macro Calculator and why is it important?",
      answer: "A macro calculator determines the optimal ratio of macronutrients—proteins, carbohydrates, and fats—required to meet specific health and fitness goals. Tracking macros is often more effective than simply counting calories because it ensures the body receives the precise fuel types needed for muscle protein synthesis, hormone regulation, and sustained energy.",
      sourceTitle: "Source: NIH - Macronutrient Considerations for the Sport Athlete",
      sourceUrl: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6019055/"
    },
    {
      question: "What is Dietary Inflammation?",
      answer: "Dietary inflammation is the chronic, low-grade immune response triggered by the continuous consumption of certain foods, particularly those high in refined sugars, trans fats, and processed meats. Conversely, consuming a diet rich in antioxidants, omega-3 fatty acids, and fiber can reduce this inflammatory burden. Our calculator generates a baseline risk score based on established correlations between specific dietary patterns and systemic inflammation.",
      sourceTitle: "Source: Harvard T.H. Chan School of Public Health - Nutrition and Immunity",
      sourceUrl: "https://www.hsph.harvard.edu/nutritionsource/disease-prevention/nutrition-and-immunity/"
    },
    {
      question: "How does the Mifflin-St Jeor Equation work?",
      answer: "Considered the gold standard by the Academy of Nutrition and Dietetics, the Mifflin-St Jeor equation calculates your Basal Metabolic Rate (BMR)—the energy expended by your body at rest. We utilize your age, weight, height, and gender to calculate this BMR, and then apply an activity multiplier to determine your Total Daily Energy Expenditure (TDEE).",
      sourceTitle: "Source: PubMed - Comparison of Predictive Equations for Resting Metabolic Rate",
      sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/15883556/"
    },
    {
      question: "Why does my 'Dietary Preference' change my macro split?",
      answer: "Different diets dictate entirely different energetic pathways. For example, a standard Ketogenic diet requires 70-80% of calories from fat to induce and maintain a state of ketosis, drastically minimizing carbohydrates. A standard Western diet, alternatively, relies heavily on carbohydrates for quick glucose metabolism. Our calculator dynamically adjusts your target percentage splits to align with the biochemical realities of your chosen diet.",
      sourceTitle: "Source: NIH - Long-term effects of a ketogenic diet",
      sourceUrl: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2716748/"
    },
    {
      question: "Is a low-inflammation score a guarantee against disease?",
      answer: "No. A low baseline dietary inflammation score indicates that your stated dietary pattern and physical metrics correlate with a *lower risk* of diet-induced systemic inflammation. However, inflammation is highly multi-factorial and can be driven by genetics, stress, sleep deprivation, and environmental toxins. This tool provides an educational estimate, not medical advice.",
      sourceTitle: "Source: Linus Pauling Institute - Inflammation",
      sourceUrl: "https://lpi.oregonstate.edu/mic/health-disease/inflammation"
    },
    {
      question: "Can I adjust my macros over time?",
      answer: "Absolutely. As your body weight, activity level, or primary health goals shift (e.g., transitioning from weight loss to muscle gain), your Total Daily Energy Expenditure will change. We recommend recalculating your baseline every 4 to 6 weeks, or whenever you experience a significant plateau, to ensure your nutritional targets continue to align with your metabolic reality.",
      sourceTitle: "Source: NIDDK - Diet & Nutrition Myths",
      sourceUrl: "https://www.niddk.nih.gov/health-information/weight-management/myths-nutrition-physical-activity"
    },
    {
      question: "What is the true difference between macronutrients and micronutrients?",
      answer: "Macronutrients (proteins, carbs, fats) are required in large quantities to provide the body with calories, or kinetic energy. Micronutrients (vitamins and minerals) are required in smaller amounts to orchestrate cellular functions, immune defense, and bone health. Our calculator optimizes your macro split, but sourcing those macros from whole foods will ensure your micronutrients are covered too.",
      sourceTitle: "Source: WHO - Nutrients",
      sourceUrl: "https://www.who.int/health-topics/nutrition"
    },
    {
      question: "How accurate is the Dietary Inflammation Score?",
      answer: "Our Dietary Inflammation Score is an educational baseline derived from wide-scale epidemiological data. It compares the known inflammatory index of your chosen diet profile against your baseline body composition and activity level. It is highly accurate at signaling broad risk trends, but it cannot replace a clinical blood test measuring actual systemic inflammatory markers like C-Reactive Protein (CRP).",
      sourceTitle: "Source: PubMed - Dietary Inflammatory Index",
      sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/24336255/"
    },
    {
      question: "Can I use this tool if I am pregnant or nursing?",
      answer: "While the underlying equations are mathematically sound, pregnant and nursing women have significantly elevated metabolic demands and specialized nutritional needs. You should add an energetic premium to the baseline provided here and consult extensively with your OB-GYN or a registered dietitian before altering your diet during pregnancy.",
      sourceTitle: "Source: ACOG - Nutrition During Pregnancy",
      sourceUrl: "https://www.acog.org/womens-health/faqs/nutrition-during-pregnancy"
    },
    {
      question: "How do I translate these macro targets into my daily meals?",
      answer: "Once you have your calculated macro targets (e.g., 150g protein, 200g carbs, 65g fat), the most effective way to hit them is by using a digital food scale and parsing your ingredients through a tracking app like Cronometer or MyFitnessPal. Over time, you will intuitively learn what a 30g protein serving of chicken breast or a 40g carbohydrate serving of oats looks like.",
      sourceTitle: "Source: USDA - MyPlate Plan",
      sourceUrl: "https://www.myplate.gov/myplate-plan"
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 relative selection:bg-teal-200 text-slate-900 pb-20 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Decorative background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-5%] w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000 pointer-events-none"></div>

      {/* Main Layout Grid - Centered Application Area with Margins for Future Ads */}
      <div className="w-full flex justify-center">

        {/* Left Ad Space Reserved */}
        <aside className="hidden xl:block w-64 flex-shrink-0 bg-transparent relative z-0 pt-24 px-4 pb-8">
          {/* Reserved for Future Placement */}
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

          {/* How It Works Section */}
          <section id="how-it-works" className="mb-24 bg-white/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-white/40">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">How This Estimator Works</h2>
            <div className="prose prose-teal max-w-none text-gray-600 leading-relaxed space-y-6">
              <p>
                Our Human Macro & Inflammation Estimator uses established nutritional science to help you understand your baseline dietary needs and potential risks. First, we use the <strong>Mifflin-St Jeor Equation</strong>—widely considered by clinical dietitians as the gold standard for accurately predicting resting metabolic rate (RMR). By factoring in your age, gender, height, weight, and daily physical activity level, we calculate your Total Daily Energy Expenditure (TDEE). This gives you a highly accurate estimate of the exact number of calories your body burns in a given day just to function.
              </p>
              <p>
                Once your baseline caloric need is established, the calculator dynamically applies specific <strong>macronutrient percentage splits</strong> based entirely on your selected &apos;Primary Dietary Preference&apos;. For example, a Ketogenic profile will aggressively lower carbohydrates and increase fats to keep you in ketosis, whereas a High-Protein or Standard profile relies on more balanced energetic pathways. These customized ratios convert your daily caloric target into precise grams of protein, carbohydrates, and fats.
              </p>
              <p>
                Finally, the tool generates a <strong>Dietary Inflammation Score (1-10)</strong>. This proprietary estimation is derived by correlating your current real-world diet type, existing body composition (BMI via your height/weight), and activity level against standard epidemiological data regarding systemic inflammation. For instance, highly processed Standard Western diets typically raise baseline inflammatory risk, while Mediterranean or Plant-based diets tend to lower it. This score is an educational starting point to help guide your long-term food choices.
              </p>
            </div>
          </section>

          {/* Medical Advisory Section */}
          <section id="medical-experts" className="mb-24 bg-gradient-to-br from-white/80 to-teal-50/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-lg border border-teal-100 text-center">
            <div className="flex justify-center mb-6">
              <span className="bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Advisory Board</span>
            </div>
            <h2 className="text-3xl font-black text-slate-800 mb-4">Backed by Medical Experts</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
              Our core algorithms and nutritional models are developed in consultation with experienced medical professionals and grounded in established clinical guidelines.
            </p>
          </section>

          {/* SEO Optimized FAQ Section */}
          <section id="faq" className="mt-24 mb-16 bg-white/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-white/40">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Frequently Asked Questions</h2>
            <p className="text-center text-sm text-teal-700 mb-10 max-w-2xl mx-auto font-medium">
              The methodology behind our calculations and baselines is strictly informed by our medical advisory team, ensuring you receive science-backed estimations.
            </p>

            <div className="space-y-8">
              {faqData.map((faq, idx) => (
                <div key={idx} className="faq-item">
                  <h3 className="text-xl font-semibold text-teal-800 mb-2">{idx + 1}. {faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                    <br />
                    <Link href={faq.sourceUrl} className="text-teal-600 hover:underline text-sm block mt-1" target="_blank" rel="noopener noreferrer">
                      {faq.sourceTitle}
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Ad Space Reserved */}
        <aside className="hidden xl:block w-64 flex-shrink-0 bg-transparent relative z-0 pt-24 px-4 pb-8">
          {/* Reserved for Future Placement */}
        </aside>

      </div>
    </main>
  );
}
