"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        const formTarget = e.target as HTMLFormElement;
        const formData = new FormData(formTarget);

        // Append the API variables strictly to the FormData object
        formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY as string);
        formData.append("subject", `New Estimator Contact from ${formData.get('name')}`);
        formData.append("from_name", formData.get('name') as string);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: json,
            });

            if (response.ok) {
                setSubmitStatus('success');
                formTarget.reset();
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Failed to securely dispatch the email through Web3Forms.');
                setSubmitStatus('error');
            }
        } catch (err) {
            setErrorMessage('A network error occurred connecting to Web3Forms API. Please try again later.');
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 relative selection:bg-teal-200 text-slate-900 pb-20 overflow-x-hidden pt-24 px-4">
            {/* Decorative background blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute top-[20%] right-[-5%] w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>

            <div className="max-w-2xl mx-auto relative z-10 w-full">
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-white/40">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-black text-slate-800 mb-4 tracking-tight">
                            Get in Touch
                        </h1>
                        <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                            Have questions about our methodology or need technical support?
                            Reach out securely using the form below.
                        </p>
                    </div>

                    {submitStatus === 'success' ? (
                        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <svg className="w-16 h-16 mx-auto mb-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="text-2xl font-bold mb-2">Message Received</h3>
                            <p className="text-emerald-700 mb-6">Thank you for contacting us. We will get back to you shortly.</p>
                            <button
                                onClick={() => setSubmitStatus('idle')}
                                className="text-emerald-600 font-medium hover:text-emerald-800 transition-colors"
                            >
                                Send another message &rarr;
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-gray-700 block">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none text-gray-800 disabled:opacity-60"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-gray-700 block">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none text-gray-800 disabled:opacity-60"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-semibold text-gray-700 block">
                                    Phone Number <span className="text-gray-400 font-normal">(Optional)</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none text-gray-800 disabled:opacity-60"
                                    placeholder="(555) 000-0000"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold text-gray-700 block">
                                    Questions or Comments <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none text-gray-800 resize-y disabled:opacity-60"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            {submitStatus === 'error' && (
                                <div className="p-4 bg-red-50 rounded-xl border border-red-100 text-red-600 text-sm">
                                    {errorMessage}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending securely...
                                    </>
                                ) : (
                                    'Send Message Securely'
                                )}
                            </button>

                            <p className="text-xs text-center text-gray-400 mt-4">
                                This form securely routes your data. We respect your <Link href="/privacy" className="underline hover:text-teal-600">privacy</Link>.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
