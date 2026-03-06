import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-teal-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="mb-8 md:mb-0 md:col-span-2">
                        <Link href="/" className="inline-block flex items-center mb-4">
                            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                                Macro & Inflammation Estimator
                            </span>
                        </Link>
                        <p className="text-sm text-gray-500 max-w-sm mb-4">
                            Your personalized baseline calculation for macronutrient targets and dietary inflammation risks.
                        </p>
                        <p className="text-xs text-gray-400 max-w-md">
                            <strong>Medical Disclaimer:</strong> This tool is for educational purposes only. It is not medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider before making dietary changes.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/articles" className="text-base text-gray-500 hover:text-teal-600">
                                    Articles & Guides
                                </Link>
                            </li>
                            <li>
                                <Link href="/#faq" className="text-base text-gray-500 hover:text-teal-600">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                            Legal & Contact
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/privacy" className="text-base text-gray-500 hover:text-teal-600">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-base text-gray-500 hover:text-teal-600">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <a href="mailto:hello@macroinflammationcalculator.com" className="text-base text-gray-500 hover:text-teal-600">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-base text-gray-400 xl:text-center shrink-0">
                        &copy; 2026 The Iyer Group, LLC. Macro & Inflammation Estimator. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
