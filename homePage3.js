import { API_URL, readProducts, createProducts } from "./utulity.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const brand = urlParams.get("brand");
document.getElementById("searchTarget").innerText = `${brand}`;

document.addEventListener("DOMContentLoaded", async () => {
  const productList = await readProducts();
  await productList
    .filter((item) => item.brand === brand)
    .map((item) => createProducts(item, "products"));
});
