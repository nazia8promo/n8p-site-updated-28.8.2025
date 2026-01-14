export function enableCaseInteraction() {
  const cards = document.querySelectorAll(".case-card");

  cards.forEach((card) => {
    const expandBtn = card.querySelector('[data-action="expand"]');
    const expandBlock = card.querySelector(".case-expand");

    if (expandBlock) expandBlock.style.display = "none";

    expandBtn?.addEventListener("click", () => {
      const open = expandBlock.style.display === "block";
      expandBlock.style.display = open ? "none" : "block";
      expandBtn.textContent = open ? "Expand" : "Collapse";
    });
  });

  const compareToggle = document.getElementById("compare-toggle");
  let compareMode = false;

  compareToggle?.addEventListener("click", () => {
    compareMode = !compareMode;
    document.body.classList.toggle("compare-mode", compareMode);
    compareToggle.textContent = compareMode
      ? "Exit compare"
      : "Compare cases";
  });
}
