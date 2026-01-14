export function applyPageMotion() {
  const page = document.querySelector(".page");
  if (!page) return;

  page.classList.remove("page-enter");
  void page.offsetWidth; // reflow
  page.classList.add("page-enter");
}
