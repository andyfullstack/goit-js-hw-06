const input = document.querySelector("#validation-input");

const dataLth = document.querySelector("[data-length='6']");
console.log(dataLth.dataset.length);

input.addEventListener("blur", fooBorder);
let dataNum = Number(dataLth.dataset.length);

function fooBorder(evt) {
  // Way1
  const inputValue = evt.currentTarget.value;

  if (inputValue.length === dataNum) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else if (inputValue.length <= 0) {
    input.classList.remove("invalid");
    input.classList.remove("valid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}

// console.log();

// Way2

//   const inputValue = evt.currentTarget.value;
//   //   alert(inputValue.length);
//   input =
//     inputValue.length === dataLth.dataset.length
//       ? input.classList.add("valid")
//       : input.classList.add("invalid");
// }
