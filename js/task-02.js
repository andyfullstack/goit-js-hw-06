const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Way #1

const listId = document.querySelector("#ingredients");

const createList = content => {
  const newElement = document.createElement("li");

  newElement.textContent = content;
  newElement.classList.add("item");
  // insertElement.insertAdjacentHTML("afterbegin", listID);

  return newElement;
};

const insertElements = ingredients.map(createList);

listId.append(...insertElements);

// Way #2

// const listID = document.querySelector("#ingredients");

// ingredients.forEach(content => {
//   const newElement = document.createElement("li");
//   newElement.textContent = content;
//   newElement.classList.add("item");
//   console.log(listID.appendChild(newElement)); // if 1 element = appendChild || append
// });
