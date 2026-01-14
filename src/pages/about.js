import { t } from "../app/i18n.js";

export default function About() {
  return `
    <section class="page about">

      <!-- SCREEN 1: ORIENTATION -->
      <header class="page-header">
        <h1>${t("about_title")}</h1>
        <p>
          ${t("about_sub")}
        </p>
      </header>

      <!-- SCREEN 2: WHAT THIS IS -->
      <section class="about-section">
        <h2>What this role represents</h2>
        <p>
          Nazia 8 Promo acts as a sales operations partner,
          responsible for how sales are structured,
          governed, and executed.
        </p>
        <p>
          The focus is on operational control and
          system-level outcomes, not task delivery.
        </p>
      </section>

      <!-- SCREEN 3: WHAT THIS IS NOT -->
      <section class="about-section">
        <h2>What this role is not</h2>
        <ul>
          <li>Marketing agency</li>
          <li>CRM vendor or software provider</li>
          <li>Consulting company</li>
          <li>Outsourced sales team</li>
        </ul>
      </section>

      <!-- SCREEN 4: OPERATOR POSITION -->
      <section class="about-section">
        <h2>Operator position</h2>
        <p>
          Sales operations are actively operated,
          not advised from the outside.
        </p>
        <p>
          Responsibility is taken for how the system
          functions over time, not for isolated actions.
        </p>
      </section>

      <!-- SCREEN 5: EXIT -->
      <footer class="about-exit">
        <a href="/how-we-work">${t("about_exit_model")}</a>
        <a href="/cases">${t("about_exit_cases")}</a>
      </footer>

    </section>
  `;
}