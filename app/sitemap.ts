import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url },
    { url: `${site.url}/articles` },
    { url: `${site.url}/learning` },
    ...getAllPosts().map((p) => ({ url: `${site.url}/articles/${p.slug}`, lastModified: p.date })),
    ...getAllPosts("learning").map((p) => ({ url: `${site.url}/learning/${p.slug}`, lastModified: p.updated ?? p.date })),
  ];
}
