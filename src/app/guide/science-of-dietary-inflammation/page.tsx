import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "The Science of Dietary Inflammation: How Macros Impact Health",
  description: "Learn the scientific link between dietary macronutrients and systemic inflammation. Understand how carbohydrates and fats influence your health.",
};

export default function ArticleOne() {
  return (
    <article className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-14">
        <header className="mb-10 text-center">
          <Link href="/guide" className="text-teal-600 font-medium hover:underline mb-6 inline-block">&larr; Back to Guide</Link>
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 leading-tight">
            The Science of Dietary Inflammation: How Macros Impact Your Health
          </h1>
          <p className="text-slate-500 font-medium">Published: August 10, 2024 • 7 min read</p>
        </header>

        <div className="prose prose-lg prose-teal max-w-none text-slate-700">
          <h2>Understanding the Biological Link</h2>
          <p>
            Dietary inflammation is not exactly the same as the acute inflammation you experience when you sprain an ankle or get a papercut. Instead, it refers to chronic, low-grade systemic inflammation caused by an overactive immune response to certain foods and metabolic byproducts. Over time, this silent biological fire can increase the risk for metabolic syndrome, cardiovascular disease, autoimmune disorders, and cognitive decline.
          </p>
          
          <h2>Carbohydrates: The Role of Glycemic Load</h2>
          <p>
            Not all carbohydrates are created equal when it comes to inflammation. Refined carbohydrates—such as white flour and added sugars—have a high glycemic index, meaning they cause rapid spikes in blood glucose and insulin.
          </p>
          <ul>
            <li><strong>Insulin Spikes:</strong> Constant high insulin levels can trigger inflammatory pathways.</li>
            <li><strong>AGEs Formation:</strong> High blood sugar increases the production of Advanced Glycation End-products (AGEs), highly inflammatory compounds.</li>
            <li><strong>Complex Carbs:</strong> Fiber-rich, complex carbohydrates like beans, whole grains, and starchy vegetables actually lower inflammation because they improve gut microbiome health.</li>
          </ul>

          <h2>Fats: Omega-3 vs. Omega-6 Ratios</h2>
          <p>
            Dietary fats are the building blocks of cellular membranes, making their quality crucial for managing inflammation. A massive driver of systemic inflammation in the modern Western diet is the heavily skewed ratio of Omega-6 fatty acids to Omega-3 fatty acids.
          </p>
          <p>
            Historically, humans evolved eating an Omega-6 to Omega-3 ratio of about 1:1. Today, that ratio is closer to 16:1 or even 20:1. Excess Omega-6 (found heavily in seed oils like soybean and corn oil) provides the precursor molecules for pro-inflammatory eicosanoids. Omega-3s (from walnuts, flax, and fatty fish) generate anti-inflammatory resolving compounds.
          </p>

          <h2>Proteins: Quality and Source Matter</h2>
          <p>
            Proteins generally have a neutral effect on inflammation, but their packaging matters immensely. Conventional processed meats containing heavy preservatives, nitrates, and oxidized fats have been well-established as pro-inflammatory. Lean, pastured animal proteins or plant-based proteins like legumes pack micronutrients that support antioxidant defense systems.
          </p>
          
          <h3>Conclusion</h3>
          <p>
            Your daily macronutrient split is more than just caloric math; it is a set of instructions you send to your cells and immune system. By prioritizing fiber-dense carbohydrates, balancing your fatty acids, and selecting high-quality proteins, you can dramatically lower your baseline dietary inflammation.
          </p>
        </div>
      </div>
    </article>
  );
}
