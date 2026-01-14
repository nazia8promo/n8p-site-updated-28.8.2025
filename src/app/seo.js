import { getLang } from "./i18n.js";

const BASE_URL = "https://nazia8promo.kz";

export function applySEO({ title, description, path }) {
  const lang = getLang();

  document.documentElement.lang = lang;

  document.title = title;

  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = description;

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }

  // EN is canonical, always
  canonical.href = `${BASE_URL}${path}`;
}
