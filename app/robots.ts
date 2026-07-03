import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://dranzerfit.vercel.app/sitemap.xml", // we'll update this after deployment
  };
}