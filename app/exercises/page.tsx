"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const muscleGroups = ["All", "Chest", "Back", "Legs", "Shoulders", "Arms", "Core"];

const exercises = [
  { name: "Push-Ups", muscle: "Chest", equipment: "Bodyweight", image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=400&q=80" },
  { name: "Barbell Bench Press", muscle: "Chest", equipment: "Barbell", image: "https://images.unsplash.com/photo-1534368270820-9de3d8053204?w=400&q=80" },
  { name: "Pull-Ups", muscle: "Back", equipment: "Bodyweight", image: "https://images.unsplash.com/photo-1598268030450-7d4ce31059f9?w=400&q=80" },
  { name: "Deadlift", muscle: "Back", equipment: "Barbell", image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400&q=80" },
  { name: "Squats", muscle: "Legs", equipment: "Barbell", image: "https://images.unsplash.com/photo-1566241142248-83fdc0f4e4ba?w=400&q=80" },
  { name: "Lunges", muscle: "Legs", equipment: "Bodyweight", image: "https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?w=400&q=80" },
  { name: "Shoulder Press", muscle: "Shoulders", equipment: "Dumbbell", image: "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?w=400&q=80" },
  { name: "Lateral Raises", muscle: "Shoulders", equipment: "Dumbbell", image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&q=80" },
  { name: "Bicep Curls", muscle: "Arms", equipment: "Dumbbell", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80" },
  { name: "Tricep Dips", muscle: "Arms", equipment: "Bodyweight", image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80" },
  { name: "Plank", muscle: "Core", equipment: "Bodyweight", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80" },
  { name: "Russian Twists", muscle: "Core", equipment: "Bodyweight", image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=400&q=80" },
];

export default function Exercises() {
  const [activeMuscle, setActiveMuscle] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredExercises = exercises.filter((ex) => {
    const matchesMuscle = activeMuscle === "All" || ex.muscle === activeMuscle;
    const matchesSearch = ex.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesMuscle && matchesSearch;
  });

  return (
    <>
      <section className="bg-gray-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Exercise <span className="text-orange-500">Library</span>
          </h1>
          <p className="text-gray-400 text-lg">
            200+ exercises with proper form guidance, filterable by muscle group.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Search bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search exercises..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
            />
          </div>

          {/* Muscle group filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {muscleGroups.map((muscle) => (
              <button
                key={muscle}
                onClick={() => setActiveMuscle(muscle)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeMuscle === muscle
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {muscle}
              </button>
            ))}
          </div>

          {/* Exercises grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredExercises.map((ex) => (
              <motion.div
                key={ex.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <img
                  src={ex.image}
                  alt={ex.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {ex.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {ex.muscle} • {ex.equipment}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredExercises.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              No exercises match your search.
            </p>
          )}
        </div>
      </section>
    </>
  );
}