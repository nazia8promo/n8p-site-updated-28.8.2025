import { t } from "../app/i18n.js";

export default function Contact() {
  return `
    <section class="page contact">

      <header class="page-header">
        <h1 class="t-command">${t("contact_title")}</h1>
        <p class="t-context">${t("contact_sub")}</p>
      </header>

      <section class="contact-options">

        <div class="contact-option">
          <h2>${t("contact_option_1_title")}</h2>
          <p>${t("contact_option_1_desc")}</p>
        </div>

        <div class="contact-option">
          <h2>${t("contact_option_2_title")}</h2>
          <p>${t("contact_option_2_desc")}</p>
        </div>

        <div class="contact-option">
          <h2>${t("contact_option_3_title")}</h2>
          <p>${t("contact_option_3_desc")}</p>
        </div>

      </section>

    </section>
  `;
}
