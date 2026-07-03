"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gray-950 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5">
          Ready to Start Your <span className="text-orange-500">Transformation?</span>
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
          Join DranzerFit today — completely free, no credit card, no
          catches. Just results.
        </p>
        <Link
          href="/programs"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold px-8 py-4 rounded-full text-lg"
        >
          Get Started Now <ArrowRight size={20} />
        </Link>
      </motion.div>
    </section>
  );
}