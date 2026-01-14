import Header from "./components/Header.js";
import { resolveRoute } from "./app/router.js";
import { enableNavigation } from "./app/navigation.js";

const app = document.getElementById("app");

function render() {
  const path = window.location.pathname;
  const Page = resolveRoute(path);
  const html = typeof Page === "function" ? Page() : Page;

  app.innerHTML = `
    ${Header()}
    <main class="app-content">
      ${html}
    </main>
  `;
}

window.addEventListener("route-change", render);
window.addEventListener("popstate", render);

// 🚀 init
enableNavigation();
render();
