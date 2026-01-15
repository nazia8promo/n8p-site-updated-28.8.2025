import { t } from "../app/i18n.js";

export default function Home() {
  return `
    <section class="page home">

      <section class="page-header">
        <h1 class="t-command">${t("home_title")}</h1>

        <p class="system-definition t-context">
          ${t("home_sub")}
        </p>

        <p class="system-statement t-context">
          ${t("home_role")}
        </p>
      </section>

      <a class="primary-cta" href="/how-we-work" data-link>
        ${t("home_enter")}
      </a>

      <section class="home-decisions">

        <div class="decision-block primary" data-route="/how-we-work">
          <h2>${t("decision_block1_title")}</h2>
          <p>${t("decision_block1_desc")}</p>
          <a href="/how-we-work" data-link>
            ${t("decision_block1_link")}
          </a>
        </div>

        <div class="decision-block" data-route="/cases">
          <h2>${t("decision_block2_title")}</h2>
          <p>${t("decision_block2_desc")}</p>
          <a href="/cases" data-link>
            ${t("decision_block2_link")}
          </a>
        </div>

        <div class="decision-block" data-route="/platform">
          <h2>${t("decision_block3_title")}</h2>
          <p>${t("decision_block3_desc")}</p>
          <a href="/platform" data-link>
            ${t("decision_block3_link")}
          </a>
        </div>

        <div class="decision-block" data-route="/contact">
          <h2>${t("decision_block4_title")}</h2>
          <p>${t("decision_block4_desc")}</p>
          <a href="/contact" data-link>
            ${t("decision_block4_link")}
          </a>
        </div>

      </section>

    </section>
  `;
}