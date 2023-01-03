import { API_URL, readProducts, createProducts } from "./utulity.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const brand = urlParams.get("brand");

document.addEventListener("DOMContentLoaded", async () => {
  const productList = await readProducts()

  const sortedDate =  productList.sort((a, b) => b.sold - a.sold);
  if (brand == "all") {
    sortedDate.map((item) => createProducts(item, "products"));
  } else {
    sortedDate
      .filter((item) => item.brand === brand)
      .map((item) => createProducts(item, "products"));
  }

  const mostPopularcompaniesLogo = document
    .getElementById("filterByname")
    .getElementsByTagName("p");
  Array.from(mostPopularcompaniesLogo).forEach((item) => {
    item.innerText.toLowerCase() == `${brand}` && item.classList.add("active");
  });
});

const mostPopularcompaniesLogo = document
  .getElementById("filterByname")
  .getElementsByTagName("p");
Array.from(mostPopularcompaniesLogo).map((item) =>
  item.addEventListener("click", function () {
    item.classList.remove("active");
    window.location.href = `./mostPopular.html?brand=${item.dataset.name}`;
    item.innerText === brand && item.classList.add("active");
  })
);
