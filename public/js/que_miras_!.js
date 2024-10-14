const starField = document.querySelector(".star-field");
const starCount = 5;

for (let i = 0; i < starCount; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = `${Math.random() * 100}vw`;
  star.style.animationDuration = `${Math.random() * 5 + 2}s`;
  star.style.animationDelay = `${Math.random() * 5}s`;
  starField.appendChild(star);
}
