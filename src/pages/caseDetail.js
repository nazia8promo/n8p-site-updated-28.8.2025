import { t } from "../app/i18n.js";
import cases from "../data/cases.js";

export default function CaseDetail(params = {}) {
  const caseId = params.id;
  const data = cases.find((c) => c.id === caseId);

  if (!data) {
    return `
      <section class="page case-detail">
        <p>${t("case_not_found")}</p>
        <a href="/cases" data-link>${t("back_to_case_hub")}</a>
      </section>
    `;
  }

  return `
    <section class="page case-detail">

      <header class="case-header">
        <h1>${data.title}</h1>
        <p>${data.summary}</p>

        <div class="case-tags">
          <span>${data.tags.industry}</span>
          <span>${data.tags.stage}</span>
          <span>${data.tags.scope}</span>
        </div>
      </header>

      <section class="case-section">
        <h2>${t("case_context")}</h2>
        <p>${data.context.market}</p>
        <p>${data.context.complexity}</p>
        <p>${data.context.constraints}</p>
      </section>

      <section class="case-section case-problem">
        <h2>${t("case_problem")}</h2>
        <p>${data.systemProblem}</p>
      </section>

      <section class="case-section">
        <h2>${t("case_operating_changes")}</h2>

        <div class="before-after">
          <div>
            <strong>${t("case_before")}</strong>
            <ul>
              ${data.before.map((i) => `<li>${i}</li>`).join("")}
            </ul>
          </div>

          <div>
            <strong>${t("case_after")}</strong>
            <ul>
              ${data.after.map((i) => `<li>${i}</li>`).join("")}
            </ul>
          </div>
        </div>

        <p class="case-anchor">${t("case_anchor")}</p>
      </section>

      <section class="case-section">
        <h2>${t("case_execution_layers")}</h2>

        <div class="layers">
          <div>
            <strong>${t("case_demand_layer")}</strong>
            <p>${data.executionLayers.demand}</p>
          </div>

          <div>
            <strong>${t("case_sales_layer")}</strong>
            <p>${data.executionLayers.sales}</p>
          </div>

          <div>
            <strong>${t("case_infra_layer")}</strong>
            <p>${data.executionLayers.infrastructure}</p>
          </div>
        </div>
      </section>

      <section class="case-section">
        <h2>${t("case_outcome")}</h2>
        <ul>
          ${data.outcome.map((o) => `<li>${o}</li>`).join("")}
        </ul>
      </section>

      <footer class="case-exit">
        <a href="/cases" data-link>${t("back_to_case_hub")}</a>
        <a href="/how-we-work" data-link>${t("view_operating_model")}</a>
      </footer>

    </section>
  `;
}
