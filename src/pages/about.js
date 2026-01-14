import { t } from "../app/i18n.js";

export default function About() {
  return `
    <section class="page about">

      <!-- SCREEN 1: ORIENTATION -->
      <header class="page-header">
        <h1>${t("about.title")}</h1>
        <p>${t("about.sub")}</p>
      </header>

      <!-- SCREEN 2: WHAT THIS IS -->
      <section class="about-section">
        <h2>${t("about.what.title")}</h2>
        <p>${t("about.what.p1")}</p>
        <p>${t("about.what.p2")}</p>
      </section>

      <!-- SCREEN 3: WHAT THIS IS NOT -->
      <section class="about-section">
        <h2>${t("about.not.title")}</h2>
        <ul>
          <li>${t("about.not.items.0")}</li>
          <li>${t("about.not.items.1")}</li>
          <li>${t("about.not.items.2")}</li>
          <li>${t("about.not.items.3")}</li>
        </ul>
      </section>

      <!-- SCREEN 4: OPERATOR POSITION -->
      <section class="about-section">
        <h2>${t("about.operator.title")}</h2>
        <p>${t("about.operator.p1")}</p>
        <p>${t("about.operator.p2")}</p>
      </section>

      <!-- SCREEN 5: EXIT -->
      <footer class="about-exit">
        <a href="/how-we-work" data-link>${t("about.exit.model")}</a>
        <a href="/cases" data-link>${t("about.exit.cases")}</a>
      </footer>

    </section>
  `;
}
