import { navigate } from "./router.js";

export function enableNavigation() {
  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-link]");
    if (!link) return;

    e.preventDefault();
    navigate(link.getAttribute("href"));
  });

  // ACTIVE state for decision-blocks
  const path = window.location.pathname;
  document.querySelectorAll(".decision-block").forEach((block) => {
    if (block.dataset.route === path) {
      block.classList.add("active");
    } else {
      block.classList.remove("active");
    }
  });
}
