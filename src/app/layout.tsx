import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Macro and Inflammation Calculator - Free Health Tool",
  description: "Calculate your personalized daily macros and dietary inflammation score based on height, weight, age, and dietary preferences.",
  keywords: "Macro and Inflammation Calculator, dietary inflammation score, macro calculator, nutrition calculator, free macro estimator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Macro and Inflammation Calculator",
    "description": "Calculate your personalized daily macros and dietary inflammation score based on your metrics.",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-1497376185782088" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-teal-200 font-sans flex flex-col min-h-screen`}
      >
        <header className="w-full bg-white/80 backdrop-blur-md border-b border-teal-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
                  MacroEstimator
                </Link>
              </div>
              <nav className="flex space-x-8">
                <Link href="/" className="text-slate-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-semibold transition-colors">
                  Calculator
                </Link>
                <Link href="/guide" className="text-slate-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-semibold transition-colors">
                  Nutrition Guide
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
