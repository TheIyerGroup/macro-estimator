import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Nutrition & Inflammation Guide | MacroEstimator",
  description: "Comprehensive guides on dietary inflammation, macronutrient calculations, and science-backed nutrition to improve your baseline health.",
  keywords: "dietary inflammation guide, nutrition blog, anti-inflammatory diet, calculate macros",
};

export default function GuideIndex() {
  const articles = [
    {
      title: "The Science of Dietary Inflammation: How Macros Impact Your Health",
      description: "Discover the biological mechanisms linking the foods you eat—specifically carbohydrates, fats, and proteins—to systemic inflammation.",
      slug: "/guide/science-of-dietary-inflammation",
      date: "August 10, 2024"
    },
    {
      title: "Understanding Anti-Inflammatory Diets: A Beginner's Guide",
      description: "Learn the core principles of Mediterranean, whole-food, and other anti-inflammatory eating patterns designed to lower disease risk.",
      slug: "/guide/anti-inflammatory-diets",
      date: "August 15, 2024"
    },
    {
      title: "How to Accurately Calculate Your Macronutrient Needs for Wellness",
      description: "A step-by-step masterclass on tracking your TDEE, assigning macro ratios, and achieving metabolic balance.",
      slug: "/guide/calculating-macronutrient-needs",
      date: "August 20, 2024"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
            Nutrition & Inflammation <span className="text-teal-600">Guide</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Science-backed articles and in-depth educational resources to help you optimize your macronutrients and lower your dietary inflammation risk.
          </p>
        </header>

        <div className="space-y-8">
          {articles.map((article, idx) => (
            <article key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <time className="text-sm text-teal-600 font-semibold mb-2 block">{article.date}</time>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">
                <Link href={article.slug} className="hover:text-teal-600 transition-colors">
                  {article.title}
                </Link>
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {article.description}
              </p>
              <Link href={article.slug} className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700">
                Read Article <span className="ml-1">&rarr;</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
