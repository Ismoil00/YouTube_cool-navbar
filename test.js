const icons = document.querySelectorAll(".icon");
const spans = document.querySelectorAll("span");
const indicator = document.getElementById("indicator");

icons.forEach((icon, index) =>
  icon.addEventListener("click", () => moveIndicator(index))
);

function moveIndicator(index) {
  icons.forEach((icon) => icon.classList.remove("active"));
  spans.forEach((icon) => icon.classList.remove("revealText"));
  icons[index].classList.add("active");
  spans[index].classList.add("revealText");
  indicator.style.transform = `translate(${120 * index}px, -50%)`;
}
