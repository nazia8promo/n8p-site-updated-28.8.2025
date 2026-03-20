import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nazia8Promo.kz",
    short_name: "Nazia8Promo",
    description:
      "Академия продаж, корпоративное внедрение и S:O:S CRM для Казахстана и СНГ.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f2",
    theme_color: "#0b132b",
    lang: "ru",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
