export function enableDragNavigation() {
  const blocks = document.querySelectorAll(".decision-block");

  blocks.forEach((block) => {
    block.addEventListener("click", () => {
      const route = block.dataset.route;
      if (!route) return;

      history.pushState({}, "", route);
      window.dispatchEvent(new Event("route-change"));
    });
  });
}
