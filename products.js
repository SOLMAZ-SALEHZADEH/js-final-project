import { API_URL, readProducts, createProducts, card} from "./utulity.js";
console.log(card)
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

let counter = 0;
let totalPrice = 0;

const count = document.getElementById("count");
const totalPriceContainer = document.getElementById("totalPrice");
const productTitle = document.getElementById("title");
const productImg = document.getElementById("productImg");
const productSold = document.getElementById("sold");
const productRate = document.getElementById("rate");
const productReviews = document.getElementById("reviews");
const productDescription = document.getElementById("description");
const productSize = document.getElementById("size");
const productColor = document.getElementById("color");

const disabledAddButton=()=>{
  if(counter>0){
    const button = document.getElementById("addToCard")
    button.classList.remove("disabled")
  }
  if(counter===0){
    const button = document.getElementById("addToCard")
    button.classList.add("disabled")
  }
}

const products = async function renderProduct() {
  const productList = await readProducts();

  const product = productList.find((item) => item.id === id);
  productTitle.innerText = product.name;
  productImg.src = product.images;
  productSold.innerText = `${product.sold.toLocaleString()} sold`;
  productRate.innerText = product.rating;
  productReviews.innerText = product.reviews;
  productDescription.innerText = product.description;
  product.sizes.map((item) => {
    const sizeContainer = document.createElement("span");
    sizeContainer.innerText = item;
    sizeContainer.className = "size-options";
    productSize.append(sizeContainer);
  });
  const sizeOptions = document.getElementsByClassName("size-options");
  Array.from(sizeOptions)[0].classList.add("active");
  // add event listener
  Array.from(sizeOptions).map((item) =>
    item.addEventListener("click", function () {
      Array.from(sizeOptions).map((item) => item.classList.remove("active"));
      item.classList.add("active");
    })
  );

  product.colors.map((item) => {
    const colorContainer = document.createElement("div");
    colorContainer.className = "color-options";
    colorContainer.style.backgroundColor = item;
    productColor.append(colorContainer);
    // <div class="color-options pink active"></div>
  });
  const colorOptions = document.getElementsByClassName("color-options");
  Array.from(colorOptions)[0].classList.add("active");
  Array.from(colorOptions).map((item) =>
    item.addEventListener("click", function () {
      Array.from(colorOptions).map((item) => item.classList.remove("active"));
      item.classList.add("active");
    })
  );
  document.getElementById("mines").addEventListener("click", function () {
    if (counter > 0) {
      counter--;
      count.innerText = "";
      count.innerText = counter;
      totalPriceContainer.innerText = "";
      totalPriceContainer.innerText = `$ ${
        counter * product.price.toLocaleString()
      }`;
    }
    disabledAddButton()
  });
  document.getElementById("plus").addEventListener("click", function () {
    if (counter < product.stock) {
      counter++;
      count.innerText = "";
      count.innerText = counter;
      totalPriceContainer.innerText = "";
      totalPriceContainer.innerText = `$ ${
        counter * product.price.toLocaleString()
      }`;
    }
    disabledAddButton()
  });
  document.getElementById("wishlist").addEventListener("click", function (e) {
    if (
      e.target.firstElementChild.firstElementChild.getAttribute("fill") ===
      "red"
    ) {
      e.target.firstElementChild.firstElementChild.setAttribute(
        "fill",
        "black"
      );
    } else {
      e.target.firstElementChild.firstElementChild.setAttribute("fill", "red");
    }
  });

  document.getElementById("addToCard").addEventListener("click", function () {
    const size = Array.from(sizeOptions).find((element) =>
      element.classList.contains("active")
    ).innerText;
    const color = Array.from(colorOptions).find((element) =>
      element.classList.contains("active")
    ).style.backgroundColor;

    card.items.push({
      images: product.images,
      name: product.name,
      count: counter,
      price: product.price,
      size: size,
      color: color,
      id:Math.random()
    });

    console.log(card)


    window.localStorage.setItem("card", JSON.stringify(card));
  });
  };

document.addEventListener("DOMContentLoaded", async () => {
  productTitle.innerText = "";
  productImg.src = "";
  productSold.innerText = "";
  productRate.innerText = "";
  productReviews.innerText = "";
  productDescription.innerText = "";
  productSize.innerHTML = "";
  productColor.innerHTML = "";
  totalPriceContainer.innerText = totalPrice;
  count.innerText = counter;
  await products();
});

// let card = [{
//   address:null,
//   shipping:null,
//   items:[],
//   status:"active"
// }];
// window.localStorage.setItem("card", JSON.stringify(card));