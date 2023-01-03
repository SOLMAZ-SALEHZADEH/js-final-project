import { API_URL, readOrders, createOrders, card } from "./utulity.js";
let ordersList;
document.addEventListener("DOMContentLoaded", async () => {
  //   ordersList = await readOrders();
  //   await ordersList.map((item) => createOrders(item, "products", "card"));
  await card.items.map((item) => createOrders(item, "products", "card"));
});

document
  .querySelector("#confirm-delete-btn")
  .addEventListener("click", (event) => {
    const id = event.target.dataset.id;
    deleteSelectedProduct(id);
  });

async function deleteSelectedProduct(productId) {
  //   try {
  // const res = await fetch(`${API_URL}/activeOrder/${productId}`, {
  //   method: "DELETE",
  // });
  const index = card.items.findIndex((item) => item.id == productId);
  card.items.splice(index, 1);
  document.getElementById("products").innerHTML = "";

  // ordersList = await readOrders();
  // await ordersList.map((item) => createOrders(item, "products", "card"));

  await card.items.map((item) => createOrders(item, "products", "card"));
  window.localStorage.setItem("card", JSON.stringify(card))
  //   } catch (error) {
  //     console.log(error.message);
  //   }
}
