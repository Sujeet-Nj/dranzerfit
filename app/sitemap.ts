import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dranzerfit.vercel.app"; // we'll update this after deployment

  const staticPages = [
    "",
    "/about",
    "/programs",
    "/exercises",
    "/nutrition",
    "/bmi-calculator",
    "/blog",
    "/contact",
    "/faq",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...blogPages];
}