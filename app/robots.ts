import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://nazia8promo.kz/sitemap.xml",
    host: "https://nazia8promo.kz",
  };
}
