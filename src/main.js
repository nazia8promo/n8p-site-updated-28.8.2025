import Header from "./components/Header.js";
import { resolveRoute } from "./app/router.js";
import { setLang } from "./app/i18n.js";

const app = document.getElementById("app");

function render() {
  const path = window.location.pathname;
  const Page = resolveRoute(path);
  const html = typeof Page === "function" ? Page() : Page;

  app.innerHTML = `
    ${Header()}
    ${html}
  `;
}

// 🔁 ОБЯЗАТЕЛЬНО
window.addEventListener("route-change", render);
window.addEventListener("popstate", render);

// 🌍 Обработка смены языка
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-lang]");
  if (!btn) return;

  e.preventDefault();
  setLang(btn.dataset.lang);
  render(); // 🔥 ПЕРЕРИСОВКА ВСЕЙ СТРАНИЦЫ
});

// 🚀 первый рендер
render();