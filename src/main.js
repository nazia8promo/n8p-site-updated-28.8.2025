import { resolveRoute } from "./app/router.js";
import { enableNavigation } from "./app/navigation.js";
import { setLang } from "./app/i18n.js";
import Shell from "./layout/Shell.js";

const app = document.getElementById("app");

function render() {
  const path = window.location.pathname;
  const Page = resolveRoute(path);

  // 🔴 ВАЖНО: Shell рендерится ОДИН РАЗ
  if (!app.dataset.shellMounted) {
    app.innerHTML = Shell(Page());
    app.dataset.shellMounted = "true";
  } else {
    // 🔵 Меняем ТОЛЬКО контент
    const content = app.querySelector(".app-content");
    content.innerHTML = Page();
  }
}

// 🔁 навигация
window.addEventListener("route-change", render);

// 🌍 язык - как было
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-lang]");
  if (!btn) return;

  e.preventDefault();
  setLang(btn.dataset.lang);
  
  // 🔑 ПОЛНЫЙ ПЕРЕРИСОВКА при смене языка
  delete app.dataset.shellMounted;
  
  const path = window.location.pathname;
  const Page = resolveRoute(path);
  app.innerHTML = Shell(Page());
  app.dataset.shellMounted = "true";
});

enableNavigation();
render();