import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | DranzerFit",
  description:
    "Fitness tips, nutrition advice, and training insights from the DranzerFit team.",
};

export default function Blog() {
  return (
    <>
      <section className="bg-gray-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            The <span className="text-orange-500">Blog</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Insights on training, nutrition, and recovery to fuel your progress.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-orange-500 text-sm font-medium">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}