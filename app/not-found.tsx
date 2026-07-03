import Link from "next/link";
import { Dumbbell, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-white">
      <div className="text-center px-6">
        <div className="inline-flex bg-orange-500/10 text-orange-500 w-16 h-16 rounded-2xl items-center justify-center mb-6">
          <Dumbbell size={32} />
        </div>
        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-4">
          404
        </h1>
        <p className="text-gray-500 text-lg mb-8">
          Looks like this page skipped leg day. It doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold px-6 py-3 rounded-full"
        >
          <Home size={18} /> Back to Home
        </Link>
      </div>
    </section>
  );
}