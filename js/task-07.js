const fontSizeControl = document.querySelector("#font-size-control");
const textControl = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
  const elementSize = fontSizeControl.value;
  textControl.style.fontSize = `${elementSize}px`;
});

// fontSizeControl.addEventListener("input", fooSize);

// function fooSize() {
//   const textSize = fontSizeControl.value;
//   textControl.style.fontSize = `${"textSize"}px`;
// }
