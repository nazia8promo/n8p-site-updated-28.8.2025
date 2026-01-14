import { t } from "../app/i18n.js";

export default function Home() {
  return `
    <section class="page home">

      <section class="home-orientation">
        <h1 class="t-command">${t("home.title")}</h1>

        <p class="t-context">
          ${t("home.subtitle")}
        </p>

        <p class="role-filter t-context">
          ${t("home.role")}
        </p>

        <a class="primary-cta" href="/how-we-work">
          ${t("home.enter")}
        </a>
      </section>

      <section class="home-decisions">

        <div class="entry-panel primary" data-route="/how-we-work">
          <h2>${t("home.decisions.model.title")}</h2>
          <p>${t("home.decisions.model.desc")}</p>
          <a>${t("home.decisions.model.link")}</a>
        </div>

        <div class="entry-panel" data-route="/cases">
          <h2>${t("home.decisions.cases.title")}</h2>
          <p>${t("home.decisions.cases.desc")}</p>
          <a>${t("home.decisions.cases.link")}</a>
        </div>

        <div class="entry-panel" data-route="/platform">
          <h2>${t("home.decisions.platform.title")}</h2>
          <p>${t("home.decisions.platform.desc")}</p>
          <a>${t("home.decisions.platform.link")}</a>
        </div>

        <div class="entry-panel" data-route="/contact">
          <h2>${t("home.decisions.contact.title")}</h2>
          <p>${t("home.decisions.contact.desc")}</p>
          <a>${t("home.decisions.contact.link")}</a>
        </div>

      </section>

    </section>
  `;
}
