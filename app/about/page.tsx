import type { Metadata } from "next";
import { Target, Heart, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | DranzerFit",
  description:
    "Learn about DranzerFit's mission to make quality fitness guidance free and accessible to everyone.",
};

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make high-quality fitness guidance accessible to everyone, regardless of budget or background.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Consistency over perfection. Sustainable habits beat quick fixes, every time.",
  },
  {
    icon: Users,
    title: "Our Community",
    description:
      "Thousands of people supporting each other on their fitness journeys — no gatekeeping.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-950 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5">
            About <span className="text-orange-500">DranzerFit</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            We believe fitness shouldn&apos;t come with a price tag. DranzerFit
            was built to give everyone — beginners and experienced athletes
            alike — the tools to build a stronger, healthier life.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            DranzerFit started as a simple idea: fitness information is
            everywhere, but it&apos;s often scattered, confusing, or hidden
            behind subscriptions. We set out to build one clean, reliable
            place — structured programs, a searchable exercise library,
            practical nutrition advice, and tools like our BMI calculator —
            all free, all in one place.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you&apos;re taking your first steps into fitness or
            refining years of experience, DranzerFit is built to grow with
            you.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-2xl p-8 shadow-sm"
                >
                  <div className="bg-orange-500/10 text-orange-500 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}