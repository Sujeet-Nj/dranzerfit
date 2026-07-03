"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Lost 8kg in 4 months",
    quote:
      "The workout programs are structured so well. I finally stuck to a routine for the first time in years.",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "Arjun Mehta",
    role: "Beginner to Gym",
    quote:
      "The exercise library helped me learn proper form before stepping into a gym. Huge confidence boost.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Sneha Rao",
    role: "Home Workout Enthusiast",
    quote:
      "Free, no ads, no nonsense. The BMI calculator and nutrition tips are things I check every week.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Real Results, Real People
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Join thousands who've transformed their fitness journey with
            DranzerFit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <div className="flex gap-1 text-orange-500 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {t.name}
                  </p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}