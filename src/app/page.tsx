import Calculator from '@/components/Calculator';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 relative selection:bg-teal-200 text-slate-900 pb-20">
      {/* Decorative background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-5%] w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000 pointer-events-none"></div>

      <div className="container mx-auto px-4 pt-16 md:pt-24 relative z-10">
        <header className="text-center max-w-4xl mx-auto mb-16">
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

        <section id="calculator">
          <Calculator />
        </section>

      </div>
    </main>
  );
}
