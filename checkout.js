import { API_URL, readOrders, createOrders ,card} from "./utulity.js";
let ordersList;
document.addEventListener("DOMContentLoaded", async () => {
  // ordersList = await readOrders();
  // await ordersList.map((item) => createOrders(item, "products", "checkout"));
  await card.items.map((item) => createOrders(item, "products", "checkout"));
  document.getElementById("address").innerText=card.address
  let shippingType = card.shipping === null ? "Choose Shipping Type" :card.shipping
  document.getElementById("shipping").innerText=shippingType
});

// document
//   .querySelector("#confirm-delete-btn")
//   .addEventListener("click", (event) => {
//     const id = event.target.dataset.id;
//     deleteSelectedProduct(id);
//   });

// async function deleteSelectedProduct(productId) {
//   try {
//     const res = await fetch(`${API_URL}/activeOrder/${productId}`, {
//       method: "DELETE",
//     });
//     document.getElementById("products").innerHTML = "";
//     ordersList = await readOrders();
//     await ordersList.map((item) => createOrders(item, "products", "card"));
//   } catch (error) {
//     console.log(error.message);
//   }
// }
