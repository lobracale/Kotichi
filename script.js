const snow = document.querySelector(".snow");

for (let i = 0; i < 28; i++) {
  const flake = document.createElement("span");
  flake.className = "flake";
  flake.textContent = "⌖°❅°⌖";
  flake.style.left = `${Math.random() * 100}%`;
  flake.style.fontSize = `${10 + Math.random() * 12}px`;
  flake.style.opacity = `${0.25 + Math.random() * 0.7}`;
  flake.style.animationDuration = `${6 + Math.random() * 10}s`;
  flake.style.animationDelay = `${Math.random() * -12}s`;
  flake.style.setProperty("--drift", `${-80 + Math.random() * 160}px`);
  snow.appendChild(flake);
}
