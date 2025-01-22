import { getMenu, getOrder } from "./apiRestaurant";

export async function getMenuLoader() {
  return await getMenu();
}

export async function getOrderLoader({ params }) {
  return await getOrder(params.orderId);
}
