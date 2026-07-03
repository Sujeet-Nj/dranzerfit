"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    if (!heightInMeters || !weightInKg || heightInMeters <= 0 || weightInKg <= 0) {
      return;
    }

    const bmiValue = weightInKg / (heightInMeters * heightInMeters);
    const roundedBmi = Math.round(bmiValue * 10) / 10;
    setBmi(roundedBmi);

    if (bmiValue < 18.5) {
      setCategory("Underweight");
    } else if (bmiValue < 25) {
      setCategory("Healthy Weight");
    } else if (bmiValue < 30) {
      setCategory("Overweight");
    } else {
      setCategory("Obese");
    }
  };

  const categoryColor: Record<string, string> = {
    Underweight: "text-blue-500",
    "Healthy Weight": "text-green-500",
    Overweight: "text-orange-500",
    Obese: "text-red-500",
  };

  return (
    <section className="bg-gray-50 min-h-[80vh] py-16">
      <div className="max-w-lg mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex bg-orange-500/10 text-orange-500 w-14 h-14 rounded-2xl items-center justify-center mb-4">
            <Calculator size={26} />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            BMI Calculator
          </h1>
          <p className="text-gray-500">
            Check your Body Mass Index and see your healthy weight range.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Height (cm)
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="e.g. 175"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Weight (kg)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="e.g. 70"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            onClick={calculateBMI}
            className="w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold py-3 rounded-xl"
          >
            Calculate BMI
          </button>

          {bmi !== null && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8 text-center border-t border-gray-100 pt-6"
            >
              <p className="text-gray-500 text-sm mb-1">Your BMI is</p>
              <p className="text-5xl font-extrabold text-gray-900 mb-2">
                {bmi}
              </p>
              <p className={`font-semibold ${categoryColor[category]}`}>
                {category}
              </p>
            </motion.div>
          )}
        </div>

        <div className="mt-8 bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">
            BMI Categories
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Underweight</span>
              <span className="text-blue-500 font-medium">Below 18.5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Healthy Weight</span>
              <span className="text-green-500 font-medium">18.5 – 24.9</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Overweight</span>
              <span className="text-orange-500 font-medium">25 – 29.9</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Obese</span>
              <span className="text-red-500 font-medium">30 and above</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}