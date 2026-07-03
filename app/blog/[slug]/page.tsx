import { blogPosts } from "@/data/blogPosts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found | DranzerFit" };
  }

  return {
    title: `${post.title} | DranzerFit`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors text-sm mb-8"
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
          <span className="bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full font-medium">
            {post.category}
          </span>
          <span>{post.date}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
          {post.title}
        </h1>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-72 md:h-96 object-cover rounded-2xl mb-8"
        />

        <p className="text-gray-700 leading-relaxed text-lg">
          {post.content}
        </p>
      </div>
    </article>
  );
}