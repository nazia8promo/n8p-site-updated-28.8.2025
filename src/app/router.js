import Home from "../pages/home.js";
import HowWeWork from "../pages/howWeWork.js";
import Cases from "../pages/cases.js";
import CaseDetail from "../pages/caseDetail.js";
import Platform from "../pages/platform.js";
import About from "../pages/about.js";
import Contact from "../pages/contact.js";

const routes = {
  "/": Home,
  "/how-we-work": HowWeWork,
  "/cases": Cases,
  "/platform": Platform,
  "/about": About,
  "/contact": Contact,
};

export function resolveRoute(path) {
  if (routes[path]) return routes[path];

  if (path.startsWith("/cases/")) {
    const id = path.split("/")[2];
    return () => CaseDetail({ id });
  }

  return Home;
}

export function navigate(path) {
  history.pushState({}, "", path);
  window.dispatchEvent(new Event("route-change"));
}