const valueShow = document.querySelector("#value");

const decrementBtn = document.querySelector('[data-action="decrement"]');

const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener("click", clickHandlerMinus);
incrementBtn.addEventListener("click", clickHandlerPlus);

let counterValue = 0;

function clickHandlerMinus() {
  counterValue -= 1;

  valueShow.textContent = counterValue;
  // valueShow.textContent = decrementBtn.textContent = `${counterValue}`;
}

function clickHandlerPlus() {
  counterValue += 1;

  valueShow.textContent = counterValue;
  // valueShow.textContent = incrementBtn.textContent = `${counterValue}`;
}

// const count = document.querySelector("#counter");
// const valueShow = document.querySelector("#value");

// const decrementBtn = count.firstElementChild.textContent;
// const valueTotal = valueShow.textContent;
// const incrementalBtn = count.firstElementChild.textContent;
// const valueTotall = valueShow.textContent;

// // console.log(valueTotal);

// const decrementData = count.firstElementChild.classList.add("firstBtn");
// const firstBtn = document.querySelector(".firstBtn");

// // console.log(firstBtn);

// const incrementBtn = count.lastElementChild.classList.add("secondBtn");
// const secondBtn = document.querySelector(".secondBtn");

// firstBtn.addEventListener("click", clickHandler);
// secondBtn.addEventListener("click", clickHandlerclick);

// let counterValue = 0;

// function clickHandler() {
//   for (let i = 1; i <= 10; i += 1) {
//     counterValue -= i;
//     console.log(i);

//     return valueShow.append(`${counterValue}`);
//   }
// }

// function clickHandlerclick() {
//   counterValue += 1;
//   console.log(i);

//   return valueShow.append(`${counterValue}`);
// }
