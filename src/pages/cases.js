import cases from "../data/cases.js";

export default function Cases() {
  return `
    <section class="page cases">
      <ul>
        ${cases.map((c) => `<li>${c.id}</li>`).join("")}
      </ul>
    </section>
  `;
}
