const categoriesList = document.querySelectorAll("#categories .item");
console.log(`Total categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;

  const items = category.querySelectorAll("ul li");

  console.log(`Category: ${categoryName}`);
  console.log(`Number of items: ${items.length}`);
});
