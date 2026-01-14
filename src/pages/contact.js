import { t } from "../app/i18n.js";

export default function Contact() {
  return `
    <section class="page contact">

      <header class="page-header">
        <h1>${t("contact_title")}</h1>
        <p>${t("contact_sub")}</p>
      </header>

      <section class="contact-options">

        <div class="contact-option">
          <h2>Strategy Call</h2>
          <p>High-level discussion of sales operations.</p>
        </div>

        <div class="contact-option">
          <h2>Sales Audit</h2>
          <p>Initial assessment of the current sales system.</p>
        </div>

        <div class="contact-option">
          <h2>Operator Conversation</h2>
          <p>Direct conversation about operating sales as a system.</p>
        </div>

      </section>

    </section>
  `;
}