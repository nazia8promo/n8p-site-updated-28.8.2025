import { t } from "../app/i18n.js";

export default function Home() {
  return `
    <section class="page home">

      <!-- ORIENTATION -->
      <section class="home-orientation">
        <h1 class="t-command">${t("We operate sales as a system.")}</h1>
        <p class="t-context">
          ${t("From fragmented sales execution<br />to controlled, scalable revenue operations.")}
        </p>
        <p class="role-filter t-context">
          ${t("Not an agency.<br />Not consulting.<br />Sales operations under management.")}
        </p>
        <a class="primary-cta" href="/how-we-work">
          ${t("Enter the operating model →")}
        </a>
      </section>

      <!-- DECISION MATRIX -->
      <section class="home-decisions">

        <div class="entry-panel decision-block primary" data-route="/how-we-work">
          <h2>${t("decision_block1_title")}</h2>
          <p>
            ${t("decision_block1_desc")}
          </p>
          <a href="/how-we-work">${t("decision_block1_link")}</a>
        </div>

        <div class="entry-panel decision-block" data-route="/cases">
          <h2>${t("decision_block2_title")}</h2>
          <p>
            ${t("decision_block2_desc")}
          </p>
          <a href="/cases">${t("decision_block2_link")}</a>
        </div>

        <div class="entry-panel decision-block" data-route="/platform">
          <h2>${t("decision_block3_title")}</h2>
          <p>
            ${t("decision_block3_desc")}
          </p>
          <a href="/platform">${t("decision_block3_link")}</a>
        </div>

        <div class="entry-panel decision-block" data-route="/contact">
          <h2>${t("decision_block4_title")}</h2>
          <p>
            ${t("decision_block4_desc")}
          </p>
          <a href="/contact">${t("decision_block4_link")}</a>
        </div>

      </section>

    </section>
  `;
}