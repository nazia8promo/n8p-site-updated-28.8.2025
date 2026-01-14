import { cases } from "../data/cases.js";
import { getCaseNavigation } from "../app/caseNav.js";
import { t } from "../app/i18n.js";

export default function CaseDetail(params) {
  const data = cases.find((c) => c.id === params.id);

  if (!data) {
    return `
      <section class="page">
        <h1>${t("case_not_found")}</h1>
        <a href="/cases">${t("back_to_cases")}</a>
      </section>
    `;
  }

  const nav = getCaseNavigation(data.id);

  return `
    <section class="page case-detail">

      <!-- SCREEN 1: HEADER -->
      <header class="case-header">
        <h1>${data.title}</h1>
        <p>${data.summary}</p>

        <div class="case-tags">
          <span>${data.tags.industry}</span>
          <span>${data.tags.stage}</span>
          <span>${data.tags.scope}</span>
        </div>
      </header>

      <!-- SCREEN 2: CONTEXT -->
      <section class="case-section">
        <h2>${t("case_context")}</h2>
        <p>${data.context.market}</p>
        <p>${data.context.complexity}</p>
        <p>${data.context.constraints}</p>
      </section>

      <!-- SCREEN 3: SYSTEM PROBLEM -->
      <section class="case-section case-problem">
        <h2>${t("case_problem")}</h2>
        <p>${data.systemProblem}</p>
      </section>

      <!-- SCREEN 4: OPERATING CHANGES -->
      <section class="case-section">
        <h2>${t("case_operating_changes")}</h2>

        <div class="before-after">
          <div>
            <h3>${t("case_before")}</h3>
            <ul>
              ${data.operatingChanges.before
                .map((i) => `<li>${i}</li>`)
                .join("")}
            </ul>
          </div>

          <div>
            <h3>${t("case_after")}</h3>
            <ul>
              ${data.operatingChanges.after
                .map((i) => `<li>${i}</li>`)
                .join("")}
            </ul>
          </div>
        </div>

        <p class="case-anchor">
          ${t("case_anchor")}
        </p>
      </section>

      <!-- SCREEN 5: EXECUTION LAYERS -->
      <section class="case-section">
        <h2>${t("case_execution_layers")}</h2>

        <div class="layers">
          <div>
            <h3>${t("case_demand_layer")}</h3>
            <p>${data.executionLayers.demand}</p>
          </div>

          <div>
            <h3>${t("case_sales_layer")}</h3>
            <p>${data.executionLayers.sales}</p>
          </div>

          <div>
            <h3>${t("case_infra_layer")}</h3>
            <p>${data.executionLayers.infrastructure}</p>
          </div>
        </div>
      </section>

      <!-- SCREEN 6: OUTCOME -->
      <section class="case-section">
        <h2>${t("case_outcome")}</h2>
        <ul>
          ${data.outcome.map((o) => `<li>${o}</li>`).join("")}
        </ul>
      </section>

      <!-- SCREEN 7: EXIT / HUB NAVIGATION -->
      <footer class="case-exit">

        <div class="case-nav">
          ${nav.prev ? `
            <a href="/cases/${nav.prev.id}">
              ← ${nav.prev.title}
            </a>
          ` : ""}

          <a href="/cases">${t("back_to_case_hub")}</a>

          ${nav.next ? `
            <a href="/cases/${nav.next.id}">
              ${nav.next.title} →
            </a>
          ` : ""}
        </div>

        <div class="case-nav-secondary">
          <a href="/how-we-work">${t("view_operating_model")}</a>
        </div>

      </footer>

    </section>
  `;
}
