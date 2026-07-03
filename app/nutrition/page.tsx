import type { Metadata } from "next";
import { Salad, Droplets, Clock, Utensils } from "lucide-react";

export const metadata: Metadata = {
  title: "Nutrition Tips | DranzerFit",
  description:
    "Practical, science-backed nutrition tips to fuel your fitness goals.",
};

const tips = [
  {
    icon: Salad,
    title: "Prioritize Whole Foods",
    description:
      "Build meals around vegetables, lean proteins, and whole grains. Minimally processed foods keep you fuller for longer and support recovery.",
  },
  {
    icon: Droplets,
    title: "Stay Hydrated",
    description:
      "Aim for at least 2-3 liters of water daily. Even mild dehydration can reduce workout performance and energy levels.",
  },
  {
    icon: Clock,
    title: "Time Your Protein",
    description:
      "Spread protein intake across meals rather than one large serving. This supports steady muscle repair throughout the day.",
  },
  {
    icon: Utensils,
    title: "Don't Fear Carbs",
    description:
      "Carbohydrates fuel your workouts. Focus on complex carbs like oats, rice, and sweet potatoes around training sessions.",
  },
];

export default function Nutrition() {
  return (
    <>
      <section className="bg-gray-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Nutrition <span className="text-orange-500">Tips</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Simple, sustainable habits to fuel your fitness journey.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {tips.map((tip) => {
            const Icon = tip.icon;
            return (
              <div
                key={tip.title}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="bg-orange-500/10 text-orange-500 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {tip.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}