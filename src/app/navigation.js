import { navigate } from "./router.js";
import { setLang } from "./i18n.js";

let initialized = false;

export function enableNavigation() {
  if (initialized) return;
  initialized = true;

  document.addEventListener("click", (e) => {
    const langBtn = e.target.closest("button[data-lang]");
    if (langBtn) {
      e.preventDefault();
      setLang(langBtn.dataset.lang);
      return;
    }

    const link = e.target.closest("a[data-link]");
    if (link) {
      e.preventDefault();
      navigate(link.getAttribute("href"));
    }
  });
}
