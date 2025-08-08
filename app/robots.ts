import type { MetadataRoute } from "next"
export const dynamic = "force-static"; // 👈 Required for static export
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://your-domain.com/sitemap.xml",
  }
}
