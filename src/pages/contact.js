import { t } from "../app/i18n.js";

export default function Contact() {
  return `
    <section class="page contact">

      <header class="page-header">
        <h1>${t("contact.title")}</h1>
        <p>${t("contact.sub")}</p>
      </header>

      <section class="contact-options">

        <div class="contact-option">
          <h2>${t("contact.options.strategy.title")}</h2>
          <p>${t("contact.options.strategy.desc")}</p>
        </div>

        <div class="contact-option">
          <h2>${t("contact.options.audit.title")}</h2>
          <p>${t("contact.options.audit.desc")}</p>
        </div>

        <div class="contact-option">
          <h2>${t("contact.options.operator.title")}</h2>
          <p>${t("contact.options.operator.desc")}</p>
        </div>

      </section>

    </section>
  `;
}
