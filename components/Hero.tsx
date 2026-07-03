"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-orange-500/10 text-orange-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            100% Free Fitness Platform
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Build the Body
            <br />
            <span className="text-orange-500">You Deserve</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-md">
            Personalized workout programs, expert nutrition guidance, and
            tools to track your progress — all in one place, completely free.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold px-6 py-3 rounded-full"
            >
              Start Training <ArrowRight size={18} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-gray-700 hover:border-gray-500 transition-colors text-white font-semibold px-6 py-3 rounded-full"
            >
              <PlayCircle size={18} /> Learn More
            </Link>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
            alt="Athlete training"
            className="rounded-3xl shadow-2xl object-cover w-full h-[400px] md:h-[500px]"
          />
        </motion.div>
      </div>
    </section>
  );
}