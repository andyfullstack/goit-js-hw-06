const changeColorBtn = document.querySelector(".change-color");
const spanResult = document.querySelector(".color");

changeColorBtn.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

spanResult.textContent = `${getRandomHexColor()}`;
