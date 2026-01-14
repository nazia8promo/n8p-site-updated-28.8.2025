export function commitNavigate(navigate) {
  document.body.classList.add('commit-transition');
  setTimeout(navigate, 120);
}
