import { t } from "../app/i18n.js";

export default function Platform() {
  return `
    <section class="page platform">

      <!-- SCREEN 1: ORIENTATION -->
      <header class="page-header">
        <h1>${t("platform_title")}</h1>
        <p>
          ${t("platform_sub")}
        </p>
      </header>

      <!-- SCREEN 2: WHY -->
      <section class="platform-section">
        <h2>${t("platform_why_title")}</h2>
        <p>
          ${t("platform_why_p1")}
        </p>
        <p>
          ${t("platform_why_p2")}
        </p>
      </section>

      <!-- SCREEN 3: WHAT IT IS -->
      <section class="platform-section">
        <h2>${t("platform_what_title")}</h2>
        <ul>
          <li>${t("platform_what_1")}</li>
          <li>${t("platform_what_2")}</li>
          <li>${t("platform_what_3")}</li>
          <li>${t("platform_what_4")}</li>
        </ul>
      </section>

      <!-- SCREEN 4: HOW IT IS USED -->
      <section class="platform-section">
        <h2>${t("platform_how_title")}</h2>
        <p>
          ${t("platform_how_p1")}
        </p>
        <p>
          ${t("platform_how_p2")}
        </p>
      </section>

      <!-- SCREEN 5: POSITIONING -->
      <section class="platform-section platform-note">
        <p>
          ${t("platform_note")}
        </p>
      </section>

      <!-- SCREEN 6: EXIT -->
      <footer class="platform-exit">
        <a href="/cases">${t("platform_exit_cases")}</a>
        <a href="/how-we-work">${t("platform_exit_model")}</a>
      </footer>

    </section>
  `;
}