// const items = document.querySelectorAll(".first");
// console.log(items);
// const arr = Array.from(items);
// console.log(arr);

// const numberOfCategories = document.querySelector("#categories");

// const arr = Array.from(list);
// console.log(arr);

const list = document.querySelectorAll(".item");
const numberOfCategories = list.length;
console.log(`Number of Categories: ${numberOfCategories}`);

// const arr = [...list];

list.forEach(element => {
  const categoryName = element.firstElementChild.textContent;
  const categoryCountList = element.lastElementChild;
  const categoryCount = categoryCountList.children.length;

  console.log("Category:", categoryName);
  console.log("Elements:", categoryCount);
});
