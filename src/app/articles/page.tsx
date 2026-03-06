import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Nutrition & Inflammation Resources | Macro Estimator Blog",
    description: "Read our comprehensive guides on how dietary macros influence systemic inflammation, determining your baseline, and taking data-driven steps toward wellness.",
};

const articles = [
    {
        title: "Understanding Dietary Inflammation: The Silent Driver of Disease",
        slug: "understanding-dietary-inflammation",
        description: "A deep dive into how continuous low-grade immune responses are triggered by your daily nutrition, and why managing baseline inflammation is critical for long-term health.",
        readTime: "5 min read",
    },
    {
        title: "How Macros Impact Your Body's Inflammatory Response",
        slug: "how-macros-impact-inflammation",
        description: "Explore the precise biochemical pathways through which proteins, fats, and carbohydrates interact with your immune system, and discover why not all calories are created equal.",
        readTime: "7 min read",
    },
    {
        title: "How to Interpret Your Calculator Results: Actionable Next Steps",
        slug: "how-to-interpret-results",
        description: "You have your baseline targets and inflammation score. Now what? Learn how to practically apply these estimates to your daily meal planning and long-term health goals.",
        readTime: "4 min read",
    }
];

export default function ArticlesIndex() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 relative selection:bg-teal-200 text-slate-900 pb-20 overflow-x-hidden pt-24 px-4">
            {/* Decorative background blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute top-[20%] right-[-5%] w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto relative z-10 w-full">
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-slate-800">
                        Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Resources</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Explore our comprehensive guides to understand the biochemical realities of macro tracking and the hidden mechanisms behind dietary inflammation.
                    </p>
                </header>

                <div className="space-y-8">
                    {articles.map((article) => (
                        <Link
                            href={`/articles/${article.slug}`}
                            key={article.slug}
                            className="block bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-md border border-white/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-teal-700 transition-colors">
                                        {article.title}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        {article.description}
                                    </p>
                                    <span className="inline-flex items-center text-sm font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                                        {article.readTime}
                                    </span>
                                </div>
                                <div className="hidden md:flex items-center justify-center text-teal-400 group-hover:text-teal-600 transition-colors pt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
