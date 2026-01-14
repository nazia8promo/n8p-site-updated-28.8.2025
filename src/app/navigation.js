import { navigate } from "./router.js";
import { setLang } from "./i18n.js";

export function enableNavigation() {
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