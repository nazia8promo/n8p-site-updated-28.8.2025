import Home from "../pages/home.js";
import HowWeWork from "../pages/howWeWork.js";
import Cases from "../pages/cases.js";
import CaseDetail from "../pages/caseDetail.js";
import Platform from "../pages/platform.js";
import About from "../pages/about.js";
import Contact from "../pages/contact.js";

export function navigate(path) {
  history.pushState(null, "", path);
  window.dispatchEvent(new Event("route-change"));
}

export function resolveRoute(path) {
  // нормализация
  if (!path || path === "/") {
    return Home;
  }

  // case detail: /cases/:id
  if (path.startsWith("/cases/")) {
    const id = path.split("/")[2];
    return () => CaseDetail({ id });
  }

  switch (path) {
    case "/how-we-work":
      return HowWeWork;

    case "/cases":
      return Cases;

    case "/platform":
      return Platform;

    case "/about":
      return About;

    case "/contact":
      return Contact;

    default:
      return () => `
        <section class="page error">
          <h1>Page not found</h1>
          <p>${path}</p>
        </section>
      `;
  }
}
