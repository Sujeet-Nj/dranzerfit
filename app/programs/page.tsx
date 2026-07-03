"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Flame, Timer, HeartPulse, StretchHorizontal } from "lucide-react";

const categories = ["All", "Strength", "Cardio", "HIIT", "Flexibility"];

const programs = [
  {
    title: "Beginner Strength Foundations",
    category: "Strength",
    duration: "6 weeks",
    level: "Beginner",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
  },
  {
    title: "Fat-Burning Cardio Blast",
    category: "Cardio",
    duration: "4 weeks",
    level: "Intermediate",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=600&q=80",
  },
  {
    title: "20-Minute HIIT Shred",
    category: "HIIT",
    duration: "3 weeks",
    level: "Advanced",
    icon: Timer,
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&q=80",
  },
  {
    title: "Full Body Mobility Flow",
    category: "Flexibility",
    duration: "2 weeks",
    level: "Beginner",
    icon: StretchHorizontal,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
  },
  {
    title: "Advanced Power Lifting",
    category: "Strength",
    duration: "8 weeks",
    level: "Advanced",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
  },
  {
    title: "Endurance Runner's Program",
    category: "Cardio",
    duration: "6 weeks",
    level: "Intermediate",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",
  },
];

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPrograms =
    activeCategory === "All"
      ? programs
      : programs.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="bg-gray-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Workout <span className="text-orange-500">Programs</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Structured plans for every goal and every level — completely free.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Programs grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-orange-500 text-xs font-semibold mb-3">
                      <Icon size={16} />
                      {program.category.toUpperCase()}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {program.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{program.duration}</span>
                      <span>•</span>
                      <span>{program.level}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredPrograms.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              No programs found in this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}