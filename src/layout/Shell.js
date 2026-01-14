import Header from "../components/Header.js";

export default function Shell(PageHtml) {
  return `
    ${Header()}

    <main class="app-content">
      ${PageHtml}
    </main>
  `;
}
