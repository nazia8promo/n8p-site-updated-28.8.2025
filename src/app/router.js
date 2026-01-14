export function navigate(path) {
  history.pushState(null, "", path);
  window.dispatchEvent(new Event("route-change"));
}

export function resolveRoute(path) {
  // твоя логика
}
