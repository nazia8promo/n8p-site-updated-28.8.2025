function render() {
  const path = window.location.pathname;
  const Page = resolveRoute(path);

  console.log("ROUTE:", path, Page); // 🔥 ВАЖНО

  let html = "";
  if (typeof Page === "function") {
    html = Page();
  } else if (typeof Page === "string") {
    html = Page;
  } else {
    html = `<section class="page error">
      <h1>Route not found</h1>
      <p>${path}</p>
    </section>`;
  }

  app.innerHTML = `
    ${Header()}
    <main class="app-content">
      ${html}
    </main>
  `;
}
