import { navigate } from "./router.js";
import { setLang } from "./i18n.js";

let initialized = false;

export function enableNavigation() {
  // ⛔ защита от повторной инициализации
  if (initialized) return;
  initialized = true;

  document.addEventListener("click", (e) => {
    // 🌍 language switch
    const langBtn = e.target.closest("button[data-lang]");
    if (langBtn) {
      e.preventDefault();
      setLang(langBtn.dataset.lang);
      return;
    }

    // 🔗 SPA navigation
    const link = e.target.closest("a[data-link]");
    if (link) {
      e.preventDefault();
      navigate(link.getAttribute("href"));
    }
  });
}

// ACTIVE state — вызывается после render
export function updateActiveState() {
  const path = window.location.pathname;

  document.querySelectorAll("[data-route]").forEach((el) => {
    el.classList.toggle("active", el.dataset.route === path);
  });
}
