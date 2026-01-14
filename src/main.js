import Header from "./components/Header.js";
import { resolveRoute } from "./app/router.js";

const app = document.getElementById("app");

function renderHeader() {
  const header = document.querySelector("header");
  if (header) {
    header.outerHTML = Header();
  } else {
    app.insertAdjacentHTML("afterbegin", Header());
  }
}

function renderPage() {
  const path = window.location.pathname;
  const Page = resolveRoute(path);
  const html = typeof Page === "function" ? Page() : Page;

  let main = document.querySelector("main");
  if (!main) {
    app.insertAdjacentHTML("beforeend", `<main></main>`);
    main = document.querySelector("main");
  }

  main.innerHTML = html;
}

// 🔁 page меняется часто
window.addEventListener("route-change", () => {
  renderPage();
});

// 🌍 язык — редкий event
window.addEventListener("lang-change", () => {
  renderHeader();
  renderPage();
});

// 🚀 первый рендер
renderHeader();
renderPage();
