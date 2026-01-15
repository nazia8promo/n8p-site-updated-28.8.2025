import { t } from "../app/i18n.js";
import cases from "../data/cases.js";

export default function Cases() {
  return `
    <section class="page cases app-content">

      <header class="page-header">
        <h1 class="t-command">${t("cases_title")}</h1>
        <p class="t-context">${t("cases_sub")}</p>
      </header>

      <section class="cases-grid">
        ${cases
          .map(
            (c) => `
          <article class="case-card">

            <h2>${c.title}</h2>
            <p>${c.summary}</p>

            <div class="case-tags">
              <span>${c.tags.industry}</span>
              <span>${c.tags.stage}</span>
              <span>${c.tags.scope}</span>
            </div>

            <div class="case-actions">
              <a href="/cases/${c.id}" data-link>
                ${t("cases_open")}
              </a>
            </div>

          </article>
        `
          )
          .join("")}
      </section>

    </section>
  `;
}