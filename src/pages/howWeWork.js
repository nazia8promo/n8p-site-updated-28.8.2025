import { t } from "../app/i18n.js";

export default function HowWeWork() {
  return `
    <section class="page how-we-work">

      <header class="page-header">
        <h1>${t("how_title")}</h1>
        <p>${t("how_sub")}</p>
      </header>

      <section class="work-section">
        <h2>${t("how_principle_title")}</h2>
        <p>${t("how_principle_p1")}</p>
        <p>${t("how_principle_p2")}</p>
      </section>

      <section class="work-section">
        <h2>${t("how_model_title")}</h2>

        <ol class="work-steps">
          <li class="model-step">
            <strong>${t("how_step1_title")}</strong><br />
            ${t("how_step1_desc")}
          </li>

          <li class="model-step">
            <strong>${t("how_step2_title")}</strong><br />
            ${t("how_step2_desc")}
          </li>

          <li class="model-step">
            <strong>${t("how_step3_title")}</strong><br />
            ${t("how_step3_desc")}
          </li>

          <li class="model-step">
            <strong>${t("how_step4_title")}</strong><br />
            ${t("how_step4_desc")}
          </li>

          <li class="model-step">
            <strong>${t("how_step5_title")}</strong><br />
            ${t("how_step5_desc")}
          </li>
        </ol>
      </section>

      <section class="work-section">
        <h2>${t("how_role_title")}</h2>
        <p>${t("how_role_p1")}</p>
        <p>${t("how_role_p2")}</p>
      </section>

      <footer class="work-exit">
        <a href="/cases">${t("how_exit_cases")}</a>
        <a href="/platform">${t("how_exit_platform")}</a>
      </footer>

    </section>
  `;
}