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

  // Mobile menu toggle
  document.addEventListener("click", (e) => {
    const toggle = e.target.closest(".mobile-menu-toggle");
    if (!toggle) return;

    const nav = document.querySelector(".main-nav");
    if (!nav) return;

    nav.classList.toggle("is-open");
  });

  // UX-поведение: закрытие меню после клика по пункту
  document.addEventListener("click", (e) => {
    const link = e.target.closest(".main-nav a");
    if (!link) return;

    const nav = document.querySelector(".main-nav");
    if (nav) nav.classList.remove("is-open");
  });
}