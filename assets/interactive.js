// interactive.js
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  // Добавляем фоновые анимированные блоки
  for (let i = 0; i < 10; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.left = Math.random() * 100 + "%";
    bubble.style.animationDuration = 5 + Math.random() * 5 + "s";
    root.appendChild(bubble);
  }

  // Простейший эффект клика
  root.addEventListener("click", (e) => {
    const spark = document.createElement("div");
    spark.classList.add("spark");
    spark.style.left = e.clientX + "px";
    spark.style.top = e.clientY + "px";
    root.appendChild(spark);
    setTimeout(() => spark.remove(), 1000);
  });
});
