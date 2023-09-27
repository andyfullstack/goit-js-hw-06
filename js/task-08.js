const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerCallback);

function handlerCallback(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;
  //   const {                                                         //Way2
  //     elements: { email, password },
  //   } = evt.currentTarget;

  if (!email.value || !password.value) {
    //   if (email.value.length <= 0 || password.value.length <= 0) { // Way2
    //   if (email.value === "" || password.value === "") {           // Way3
    return alert("Please type all form fields!");
  }

  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);
  evt.currentTarget.reset();
}
