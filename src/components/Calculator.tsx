'use client';

import { useState } from 'react';
import { UserInput, MacroResults, InflammationResult, calculateMacros, calculateInflammationScore } from '@/utils/calculator';

export default function Calculator() {
    const [step, setStep] = useState<1 | 2>(1);
    const [formData, setFormData] = useState<UserInput>({
        age: 30,
        weightLbs: 150,
        heightInches: 65,
        gender: 'female',
        activityLevel: 'moderately_active',
        dietaryPreference: 'omnivore',
        primaryHealthGoal: 'general_wellness',
        currentDietType: 'omnivore',
    });

    const dietOptions = [
        { value: 'omnivore', label: 'Omnivore / Standard' },
        { value: 'vegetarian', label: 'Vegetarian' },
        { value: 'vegan', label: 'Vegan' },
        { value: 'pescatarian', label: 'Pescatarian' },
        { value: 'keto', label: 'Keto' },
        { value: 'paleo', label: 'Paleo' },
        { value: 'mediterranean', label: 'Mediterranean' },
        { value: 'carnivore', label: 'Carnivore' },
        { value: 'low_fodmap', label: 'Low-FODMAP' },
        { value: 'gluten_free', label: 'Gluten-Free' },
        { value: 'dairy_free', label: 'Dairy-Free' },
        { value: 'high_protein', label: 'High Protein' },
        { value: 'low_carb', label: 'Low Carb' },
    ];
    const [results, setResults] = useState<{ macros: MacroResults; inflammation: InflammationResult } | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'age' || name === 'weightLbs' || name === 'heightInches' ? Number(value) : value,
        }));
    };

    const calculateResults = (e: React.FormEvent) => {
        e.preventDefault();
        const macros = calculateMacros(formData);
        const inflammation = calculateInflammationScore(formData);
        setResults({ macros, inflammation });
        setStep(2);
    };

    return (
        <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden border border-white/20 transition-all duration-500">
            {step === 1 ? (
                <form onSubmit={calculateResults} className="p-8 md:p-12 animate-in fade-in zoom-in duration-500 relative pb-16">
                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 mb-2">
                            Personalized Analysis
                        </h2>
                        <p className="text-gray-500">Enter your details to generate your dietary profile.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Age</label>
                            <input type="number" name="age" value={formData.age} onChange={handleInputChange} min="18" max="100" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none bg-white/80" />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Gender</label>
                            <select name="gender" value={formData.gender} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none bg-white/80">
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Weight (lbs)</label>
                            <input type="number" name="weightLbs" value={formData.weightLbs} onChange={handleInputChange} min="50" max="500" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none bg-white/80" />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Height (inches)</label>
                            <input type="number" name="heightInches" value={formData.heightInches} onChange={handleInputChange} min="36" max="96" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none bg-white/80" />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Activity Level</label>
                            <select name="activityLevel" value={formData.activityLevel} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none bg-white/80">
                                <option value="sedentary">Sedentary (Little to no exercise)</option>
                                <option value="lightly_active">Lightly Active (Light exercise 1-3 days/week)</option>
                                <option value="moderately_active">Moderately Active (Moderate exercise 3-5 days/week)</option>
                                <option value="very_active">Very Active (Heavy exercise 6-7 days/week)</option>
                                <option value="extra_active">Extra Active (Very heavy exercise, physical job)</option>
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Dietary Preference <em>(For Macro Split)</em></label>
                            <select name="dietaryPreference" value={formData.dietaryPreference} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none bg-white/80">
                                {dietOptions.map(opt => (
                                    <option key={`pref-${opt.value}`} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                        </div>

                        <div className="md:col-span-1">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Primary Health Goal</label>
                            <select name="primaryHealthGoal" value={formData.primaryHealthGoal} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none bg-white/80">
                                <option value="general_wellness">General Wellness</option>
                                <option value="weight_loss">Weight Loss</option>
                                <option value="muscle_gain">Muscle Gain</option>
                                <option value="energy">Energy Optimization</option>
                                <option value="joint_health">Joint Health & Recovery</option>
                            </select>
                        </div>

                        <div className="md:col-span-1">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Current Diet Type</label>
                            <select name="currentDietType" value={formData.currentDietType} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none bg-white/80">
                                {dietOptions.map(opt => (
                                    <option key={`cur-${opt.value}`} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="mt-8 w-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transform transition-all active:scale-95">
                        Calculate My Results
                    </button>

                    <div className="mt-8 pt-6 border-t border-gray-100 text-xs text-center text-gray-400">
                        <p><strong>Disclaimer:</strong> This tool provides a baseline estimate for general wellness and educational purposes only. It is not medical advice. For highly personalized dietary logistics, look out for our upcoming premium platform.</p>
                    </div>
                </form>
            ) : (
                <div className="p-8 md:p-12 animate-in slide-in-from-right duration-500 flex flex-col min-h-full h-full pb-16 relative">
                    <button onClick={() => setStep(1)} className="text-teal-600 font-medium hover:underline mb-6 flex items-center w-fit">
                        &larr; Back to Edit Details
                    </button>

                    <h2 className="text-3xl font-extrabold text-gray-800 mb-8 border-b pb-4">Your Estimated Results</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative flex-grow">
                        {/* Results Content */}
                        <div className="transition-all duration-700">
                            <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100 h-full flex flex-col">
                                <h3 className="text-xl font-bold text-teal-800 mb-4">Daily Targets</h3>
                                <div className="text-5xl font-black text-teal-600 mb-6 bg-white py-4 px-6 rounded-xl inline-block shadow-sm text-center">
                                    {results?.macros.calories} <span className="text-lg text-teal-500 font-semibold">kcal</span>
                                </div>

                                <div className="space-y-4 flex-grow">
                                    <div>
                                        <div className="flex justify-between text-sm font-bold text-gray-600 mb-1">
                                            <span>Protein</span>
                                            <span>{results?.macros.protein}g</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm font-bold text-gray-600 mb-1">
                                            <span>Carbs</span>
                                            <span>{results?.macros.carbs}g</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm font-bold text-gray-600 mb-1">
                                            <span>Fat</span>
                                            <span>{results?.macros.fat}g</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="transition-all duration-700">
                            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100 h-full flex flex-col justify-center text-center">
                                <h3 className="text-xl font-bold text-orange-800 mb-2">Dietary Inflammation Score</h3>
                                <div className="text-6xl font-black text-orange-600 my-4">
                                    {results?.inflammation.score}<span className="text-2xl text-orange-400">/10</span>
                                </div>
                                <div className="inline-block px-4 py-1 rounded-full text-sm font-bold bg-orange-200 text-orange-800 mb-4 mx-auto">
                                    {results?.inflammation.level} Risk
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {results?.inflammation.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100 text-xs text-center text-gray-400">
                        <p><strong>Disclaimer:</strong> This tool provides a baseline estimate for general wellness and educational purposes only. It is not medical advice. For highly personalized dietary logistics, look out for our upcoming premium platform.</p>
                    </div>
                </div>
            )}
        </div>
    );
}
