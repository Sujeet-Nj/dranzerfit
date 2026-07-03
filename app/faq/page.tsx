"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is DranzerFit really 100% free?",
    answer:
      "Yes. Every program, tool, and article on DranzerFit is completely free with no hidden fees, subscriptions, or paywalls.",
  },
  {
    question: "Do I need gym equipment to follow the programs?",
    answer:
      "Not necessarily. We offer bodyweight-only programs alongside equipment-based ones, so you can train at home or in a gym.",
  },
  {
    question: "How often should I use the BMI calculator?",
    answer:
      "BMI is a useful snapshot, not a daily metric. Checking every few weeks is enough to track general trends over time.",
  },
  {
    question: "Can beginners use the Exercise Library?",
    answer:
      "Absolutely. Each exercise entry is written with proper form guidance in mind, making it beginner-friendly while still useful for advanced users.",
  },
  {
    question: "Will there be more content added in the future?",
    answer:
      "Yes, we're continuously adding new programs, exercises, and blog articles based on community feedback.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 min-h-[70vh]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h1>
          <p className="text-gray-500">
            Everything you need to know about DranzerFit.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors"
              >
                {faq.question}
                <ChevronDown
                  size={20}
                  className={`text-gray-400 transition-transform flex-shrink-0 ml-4 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-500 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}