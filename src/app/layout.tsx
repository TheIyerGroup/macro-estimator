import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-teal-200 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
