import { t, getLang } from "../app/i18n.js";

export default function Header() {
  const lang = getLang();

  return `
    <header class="site-header">
      <div class="header-inner">

        <div class="brand">
          <a href="/" data-link>Nazia 8 Promo</a>
        </div>

        <nav class="main-nav">
          <a href="/how-we-work" data-link>${t("nav_how")}</a>
          <a href="/cases" data-link>${t("nav_cases")}</a>
          <a href="/platform" data-link>${t("nav_platform")}</a>
          <a href="/about" data-link>${t("nav_about")}</a>
          <a href="/contact" data-link>${t("nav_contact")}</a>
        </nav>

        <div class="lang-switch">
          <button data-lang="en" class="${lang === "en" ? "active" : ""}">EN</button>
          <button data-lang="ru" class="${lang === "ru" ? "active" : ""}">RU</button>
          <button data-lang="kz" class="${lang === "kz" ? "active" : ""}">KZ</button>
        </div>

      </div>
    </header>
  `;
}
