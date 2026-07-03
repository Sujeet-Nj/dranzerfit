"use client";

import { motion } from "framer-motion";
import { Dumbbell, Apple, Calculator, BookOpen } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Workout Programs",
    description:
      "Structured plans for strength, cardio, HIIT, and flexibility — for every fitness level.",
  },
  {
    icon: Apple,
    title: "Nutrition Guidance",
    description:
      "Practical, science-backed tips to fuel your body and support your goals.",
  },
  {
    icon: Calculator,
    title: "BMI Calculator",
    description:
      "Instantly check your BMI and get personalized healthy range guidance.",
  },
  {
    icon: BookOpen,
    title: "Exercise Library",
    description:
      "Browse 200+ exercises with clear instructions and proper form tips.",
  },
];

export default function Features() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Everything You Need, Free
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            No subscriptions, no paywalls — just the tools to help you reach
            your fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="bg-orange-500/10 text-orange-500 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}