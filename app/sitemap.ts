import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: "https://venkat-071106.vercel.app", lastModified: new Date(), changeFrequency: "monthly", priority: 1 }]; }
