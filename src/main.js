import { resolveRoute } from "./app/router.js";
import { enableNavigation } from "./app/navigation.js";
import { setLang } from "./app/i18n.js";
import Shell from "./layout/Shell.js";

const app = document.getElementById("app");

function render() {
  const path = window.location.pathname;
  const Page = resolveRoute(path);

  const html = typeof Page === "function" ? Page() : Page;

  if (!app.dataset.shellMounted) {
    app.innerHTML = Shell(html);
    app.dataset.shellMounted = "true";
  } else {
    const content = app.querySelector(".app-content");
    content.innerHTML = html;
  }
}

window.addEventListener("route-change", render);

document.addEventListener("click", (e) => {
  // ✅ ФИКС: ограничиваем обработчик ТОЛЬКО кнопками с data-lang
  const btn = e.target.closest("button[data-lang]");
  if (!btn) return;

  e.preventDefault();
  setLang(btn.dataset.lang);

  delete app.dataset.shellMounted;
  render();
});

enableNavigation();
render();