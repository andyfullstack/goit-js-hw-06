const changeColorBtn = document.querySelector(".change-color");

const spanResult = document.querySelector(".color");
// const bodyElement = document.body;
const bodyElement = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onChangeBtnClick = () => {
  const currentColor = getRandomHexColor();
  bodyElement.style.backgroundColor = currentColor;
  spanResult.textContent = currentColor;
};
changeColorBtn.addEventListener("click", onChangeBtnClick);
