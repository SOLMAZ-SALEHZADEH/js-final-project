import { API_URL, readOrders, createOrders, card } from "./utulity.js";
let ordersList;
document.addEventListener("DOMContentLoaded", async () => {
  ordersList = await readOrders();
  await ordersList.map((item) =>
    item.items.map((item) => createOrders(item, "products", "checkout"))
  );
});
