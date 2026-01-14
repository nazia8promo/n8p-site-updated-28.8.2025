import { resolveRoute } from "./app/router.js";
import { enableNavigation } from "./app/navigation.js";
import { setLang } from "./app/i18n.js";
import Shell from "./layout/Shell.js";

import "./styles/reset.css";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/theme.css";
import "./styles/client-ready.css";

const app = document.getElementById("app");

function render() {
  const path = window.location.pathname;
  const Page = resolveRoute(path);
  
  // 🔧 ПАТЧ №1: безопасное получение HTML
  // resolveRoute может вернуть функцию или готовый HTML
  const html = typeof Page === "function" ? Page() : Page;

  // 🔴 ВАЖНО: Shell рендерится ОДИН РАЗ
  if (!app.dataset.shellMounted) {
    app.innerHTML = Shell(html);
    app.dataset.shellMounted = "true";
  } else {
    // 🔵 Меняем ТОЛЬКО контент
    const content = app.querySelector(".app-content");
    content.innerHTML = html;
  }
}

// 🔁 навигация
window.addEventListener("route-change", render);

// 🌍 язык - ИСПРАВЛЕНО: единый источник правды
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-lang]");
  if (!btn) return;

  e.preventDefault();
  setLang(btn.dataset.lang);

  // 🔧 ПАТЧ №2: удаляем дублирование логики
  // render() - единственный источник правды для отрисовки DOM
  delete app.dataset.shellMounted;
  render(); // 🔑 ВСЕГДА один источник правды
});

enableNavigation();
render();