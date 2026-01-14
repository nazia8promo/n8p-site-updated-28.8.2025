import { t } from "../app/i18n.js";

export default function About() {
  return `
    <section class="page about">

      <header class="page-header">
        <h1>${t("about_title")}</h1>
        <p>${t("about_sub")}</p>
      </header>

      <section class="about-section">
        <h2>${t("about_what_title")}</h2>
        <p>${t("about_what_p1")}</p>
        <p>${t("about_what_p2")}</p>
      </section>

      <section class="about-section">
        <h2>${t("about_not_title")}</h2>
        <ul>
          <li>${t("about_not_1")}</li>
          <li>${t("about_not_2")}</li>
          <li>${t("about_not_3")}</li>
          <li>${t("about_not_4")}</li>
        </ul>
      </section>

      <section class="about-section">
        <h2>${t("about_operator_title")}</h2>
        <p>${t("about_operator_p1")}</p>
        <p>${t("about_operator_p2")}</p>
      </section>

      <footer class="about-exit">
        <a href="/how-we-work" data-link>${t("about_exit_model")}</a>
        <a href="/cases" data-link>${t("about_exit_cases")}</a>
      </footer>

    </section>
  `;
}
