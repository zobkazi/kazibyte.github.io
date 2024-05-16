'use client';

import React from 'react';
import { useState } from 'react';
import faqData from '@/config/features/faqData';

const FAQ: React.FC = () => {
    const [faqs, setFaqs] = useState(faqData);

    const toggleFAQ = (index: number) => {
        setFaqs(prevFaqs => {
            const updatedFaqs = [...prevFaqs];
            updatedFaqs[index].isOpen = !updatedFaqs[index].isOpen;
            return updatedFaqs;
        });
    };

    return (
        <div className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
            <div className="mx-auto px-5">
                <div className="flex flex-col items-center">
                    <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
                    <p className="mt-3 text-lg text-neutral-500 md:text-xl">Frequently asked questions</p>
                </div>
                <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
                    {faqs.map((faq, index) => (
                        <div key={index} className="py-5">
                            <details className="group">
                                <summary
                                    className="flex cursor-pointer list-none items-center justify-between font-medium"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span>{faq.question}</span>
                                    <span className={`transition ${faq.isOpen ? 'rotate-180' : ''}`}>
                                        <svg
                                            fill="none"
                                            height="24"
                                            shape-rendering="geometricPrecision"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            width="24"
                                        >
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className={`mt-3 text-neutral-600 ${faq.isOpen ? 'animate-fadeIn' : ''}`}>
                                    {faq.answer}
                                </p>
                            </details>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
