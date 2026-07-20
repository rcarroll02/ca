const btn = document.getElementById("button--secondary");
const primaryBtn = document.querySelector(".button--primary");

function moveButton(button) {
  const rect = button.getBoundingClientRect();
  const margin = 16;
  const maxX = Math.max(0, window.innerWidth - rect.width - margin);
  const maxY = Math.max(0, window.innerHeight - rect.height - margin);

  button.style.position = "fixed";
  button.style.left = `${Math.random() * maxX}px`;
  button.style.top = `${Math.random() * maxY}px`;
}

function createHeartBurst(x, y) {
  const heart = document.createElement("div");
  heart.className = "heart-burst";
  heart.textContent = "❤️";
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  heart.style.setProperty("--drift-x", `${(Math.random() - 0.5) * 220}px`);
  heart.style.setProperty("--drift-y", `${-window.innerHeight * 0.8}px`);
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1800);
}

btn.addEventListener("mouseover", () => {
  moveButton(btn);
});

primaryBtn.addEventListener("click", () => {
  const rect = primaryBtn.getBoundingClientRect();
  const startX = rect.left + rect.width / 2;
  const startY = window.innerHeight - 40;

  for (let i = 0; i < 80; i += 1) {
    const x = startX + (Math.random() - 0.5) * 300;
    const y = startY + Math.random() * 40;
    setTimeout(() => createHeartBurst(x, y), i * 20);
  }
});
