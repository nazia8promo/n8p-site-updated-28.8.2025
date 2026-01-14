import Header from "./components/Header.js";
import { resolveRoute } from "./app/router.js";
import { navigate } from "./app/router.js";
import { setLang } from "./app/i18n.js";

const app = document.getElementById("app");

function render() {
  const path = window.location.pathname;
  const Page = resolveRoute(path);
  const html = typeof Page === "function" ? Page() : Page;

  app.innerHTML = `
    ${Header()}
    <main class="app-content">
      ${html}
    </main>
  `;
}

// 🔁 роутинг
window.addEventListener("route-change", render);
window.addEventListener("popstate", render);

// 🔗 ЕДИНСТВЕННЫЙ click-listener
document.addEventListener("click", (e) => {
  // 🌍 язык
  const langBtn = e.target.closest("button[data-lang]");
  if (langBtn) {
    e.preventDefault();
    setLang(langBtn.dataset.lang);
    return;
  }

  // 🔗 SPA ссылки
  const link = e.target.closest("a[data-link]");
  if (link) {
    e.preventDefault();
    navigate(link.getAttribute("href"));
  }
});

// 🚀 старт
render();
