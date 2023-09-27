const formInput = document.querySelector("#name-input");

const formOutput = document.querySelector("#name-output");

formInput.addEventListener("input", typeInput);

function typeInput(evt) {
  formOutput.textContent =
    formInput.value.length > 0 ? evt.currentTarget.value : "Anonymous";
}

// Way 2

//   formOutput.textContent = evt.currentTarget.value || "Anonymous";
