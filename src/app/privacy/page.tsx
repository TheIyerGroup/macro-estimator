export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 relative selection:bg-teal-200 text-slate-900 pb-20 overflow-x-hidden pt-24 px-4">
            {/* Decorative background blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute top-[20%] right-[-5%] w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto relative z-10 bg-white/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-white/40">
                <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-8 border-b-2 border-teal-100 pb-4">
                    Privacy Policy
                </h1>

                <div className="prose prose-teal max-w-none text-gray-600 leading-relaxed space-y-6">
                    <p className="font-medium text-sm text-gray-500 mb-8">
                        Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Introduction</h2>
                    <p>
                        Welcome to the Macro & Inflammation Estimator, owned and operated by The Iyer Group, LLC ("we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at hello@macroinflammationcalculator.com.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. Core Privacy Principle: Health Data</h2>
                    <p className="font-semibold text-teal-800 bg-teal-50 p-4 rounded-xl border border-teal-100">
                        We do not sell, rent, or persistently store any sensitive personal health data entered into our calculator. The metrics you input (such as height, weight, and age) are processed locally or transiently to generate your estimator results and are not persistently stored in a database linked to your identity without explicit opt-in for future features.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Information We Collect</h2>
                    <p>
                        We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, or when you contact us. This may include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Contact Information:</strong> Email addresses provided via our waitlist/newsletter signup forms.</li>
                        <li><strong>Usage Data:</strong> We may automatically collect certain information when you visit, use, or navigate the Site, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, and information about how and when you use our site.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">4. Third-Party Advertising (Google AdSense)</h2>
                    <p>
                        We use third-party advertising companies, including Google AdSense, to serve ads when you visit our website. These companies may use information (not including your name, address, email address, or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
                    </p>
                    <p>
                        Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet. Users may opt out of personalized advertising by visiting Google's Ads Settings.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">5. Medical Disclaimer</h2>
                    <p>
                        This Application does not collect information for the purpose of medical diagnosis or treatment. The Application is provided for educational and informational purposes only. Please review our Terms of Service for our complete medical disclaimer.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">6. Changes to This Notice</h2>
                    <p>
                        We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
                    </p>
                </div>
            </div>
        </div>
    );
}
