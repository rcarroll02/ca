const btn = document.getElementById("button--secondary");

function moveButton(button) {
  const rect = button.getBoundingClientRect();
  const margin = 16;
  const maxX = Math.max(0, window.innerWidth - rect.width - margin);
  const maxY = Math.max(0, window.innerHeight - rect.height - margin);

  button.style.position = "fixed";
  button.style.left = `${Math.random() * maxX}px`;
  button.style.top = `${Math.random() * maxY}px`;
}

btn.addEventListener("mouseover", () => {
  moveButton(btn);
});
