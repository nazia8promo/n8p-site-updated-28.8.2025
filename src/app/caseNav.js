import { cases } from "../data/cases.js";

export function getCaseNavigation(currentId) {
  const index = cases.findIndex((c) => c.id === currentId);

  if (index === -1) return {};

  return {
    prev: cases[index - 1] || null,
    next: cases[index + 1] || null
  };
}
