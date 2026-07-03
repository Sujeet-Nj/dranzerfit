"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Active Members", value: "100+" },
  { label: "Workout Programs", value: "50+" },
  { label: "Exercises in Library", value: "50+" },
  { label: "Success Stories", value: "50+" },
];

export default function Stats() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <p className="text-3xl md:text-4xl font-extrabold text-gray-900">
              {stat.value}
            </p>
            <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}