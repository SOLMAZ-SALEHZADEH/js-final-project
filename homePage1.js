import { API_URL, readProducts, createProducts } from "./utulity.js";

const greeting = () => {
  const time = new Date().getHours();
  let greeting;
  if (time <= 12) {
    greeting = "Good morning";
  } else if (time <= 24) {
    greeting = "Good night";
  } else {
    greeting = "Good evening";
  }
  document.getElementById("greeting").innerHTML = greeting;
};
greeting();

function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  //   let ss = date.getSeconds();
  let session = "AM";

  if (hh === 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  //   ss = ss < 10 ? "0" + ss : ss;

  let time = hh + ":" + mm;

  document.getElementById("clock").innerText = time;
  let t = setTimeout(function () {
    currentTime();
  }, 1000 * 60);
}
currentTime();

let userInfo = JSON.parse(window.localStorage.getItem("uerInfo"));
userInfo && (document.getElementById("userName").innerText = userInfo.name);

document.addEventListener("DOMContentLoaded", async () => {
  const productList = await readProducts()
  await productList.map((item)=>createProducts(item,"products"));
});

const companiesLogo = document
  .getElementById("companies")
  .getElementsByTagName("img");
Array.from(companiesLogo).map((item) =>
  item.addEventListener("click", function () {
    window.location.href = `./homePage3.html?brand=${item.dataset.name}`;
  })
);
const mostPopularcompaniesLogo = document
  .getElementById("filterByname")
  .getElementsByTagName("p");
Array.from(mostPopularcompaniesLogo).map((item) =>
  item.addEventListener("click", function () {
    window.location.href = `./mostPopular.html?brand=${item.dataset.name}`;
  })
);
