import type { MetadataRoute } from "next";
import { seo } from "@/data/business";

const routes = ["", "/layanan", "/harga", "/proyek", "/tentang", "/faq", "/kontak"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${seo.baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
