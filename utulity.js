export const API_URL = "http://localhost:3000";

export const readProducts = async function readProduct() {
  try {
    const res = await fetch(`${API_URL}/products`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
export const readOrders = async function readOrder() {
  try {
    const res = await fetch(`${API_URL}/activeOrder`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const createProducts = (item, containerId, pageName) => {
  const container = document.createElement("a");
  container.href = `./products.html?id=${item.id}`;
  const productImage = document.createElement("div");
  productImage.className = "productImage";
  const img = document.createElement("img");
  img.src = item.images;
  img.alt = item.name;
  productImage.append(img);
  const productTitle = document.createElement("p");
  productTitle.className = "product-title";
  productTitle.innerText = item.name;
  const productPrice = document.createElement("p");
  productPrice.className = "price";
  productPrice.innerText = `$ ${item.price}`;
  container.append(productImage);
  container.append(productTitle);
  container.append(productPrice);
  document.getElementById(containerId).append(container);
};

export const createOrders = (item, containerId, pageName) => {
  const cardContainer = document.createElement("div");
  cardContainer.className = "card";
  const img = document.createElement("img");
  img.src = item.images;
  img.alt = item.name;
  cardContainer.append(img);

  const infoContainer = document.createElement("div");

  const cardTitle = document.createElement("div");
  cardTitle.className = "card-title";

  const title = document.createElement("p");
  title.innerText = item.name;
  const deleteButton = document.createElement("button");
  deleteButton.dataset.id = item.id;
  deleteButton.title = "DELETE";
  deleteButton.className = "btn btn-sm m-1 text-white";
  deleteButton.dataset.bsToggle = "modal";
  deleteButton.dataset.bsTarget = "#deleteModal";
  deleteButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px">
    <path d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z"></path>
  </svg>`;
  deleteButton.addEventListener("click", () => deleteTodo(item));
  //
  cardTitle.append(title);
  cardTitle.append(deleteButton);

  infoContainer.append(cardTitle);

  const secondDiv = document.createElement("div");
  secondDiv.innerHTML = `          <div class="d-flex">
    <div class="color" style="background:${item.color}"></div>
    <p class="color-name mx-2">${item.color}</p>
    <p>|</p>
    <p class="mx-2">size =</p>
    <p>${item.size}</p>
  </div>`;

  infoContainer.append(secondDiv);

  const thirdDiv = document.createElement("div");
  thirdDiv.className = "mt-3 d-flex align-items-center justify-content-between";
  const price = document.createElement("p");
  price.innerText = `$ ${Number(item.count) * Number(item.price)}`;
  const countContainer = document.createElement("div");
  if (pageName === "card") {
    countContainer.className = "ml-5 quantity-counter";
    countContainer.innerHTML = `<p id="mines">-</p> <p id="count">${item.count}</p><p>+</p>`;
  }

  if(pageName === "checkout"){
    countContainer.className = "ml-5 quantity-counter";
    countContainer.innerHTML = `${item.count}`;
  }
  thirdDiv.append(price);
  thirdDiv.append(countContainer);
  infoContainer.append(thirdDiv);

  cardContainer.append(infoContainer);
  document.getElementById(containerId).append(cardContainer);
};

const deleteTodo = (product) => {
  const deleteModal = document.getElementById("deleteModal");
  deleteModal.querySelector("#deleteModalImage").src = product.images;
  deleteModal.querySelector(".deleteModalTitle").innerText = product.name;
  deleteModal.querySelector("#productColor").style.background = product.color;
  deleteModal.querySelector("#productColorName").innerText = product.color;
  deleteModal.querySelector("#size").innerText = product.size;
  deleteModal.querySelector("#count").innerText = product.count;
  deleteModal.querySelector("#confirm-delete-btn").dataset.id = product.id;
  deleteModal.querySelector("#Quantity").innerText = `$ ${
    Number(product.count) * Number(product.price)
  }`;
};

export let card;
if(window.localStorage.getItem("card")){
  card = JSON.parse(window.localStorage.getItem("card"))
}else{
  window.localStorage.setItem("card", JSON.stringify({
    address:null,
    shipping:null,
    items:[],
    status:"active"
  }))
  card =JSON.parse(window.localStorage.getItem("card"))
}

