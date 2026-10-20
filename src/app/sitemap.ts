import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { route: "", priority: 1.0 },
    { route: "/features", priority: 0.9 },
    { route: "/architecture", priority: 0.8 },
    { route: "/about", priority: 0.9 },
  ];

  return pages.map(({ route, priority }) => ({
    url: `${siteUrl.replace(/\/$/, "")}${route}`,
    changeFrequency: "monthly",
    priority,
  }));
}
