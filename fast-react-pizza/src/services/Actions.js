import { redirect } from "react-router-dom";
import { isValidPhone } from "../util/helpers";
import { createOrder, updateOrder } from "../services/apiRestaurant";
import store from "../store";
import { clearCart } from "../features/cart/cartSlice";

export async function CreateOrderAction({ request }) {
  try {
    const data = Object.fromEntries(await request.formData());

    const order = {
      ...data,
      cart: JSON.parse(data.cart),
      priority: data.priority === "true",
    };
    const errors = {};

    //console.log(order);

    if (!isValidPhone(order.phone)) {
      errors.phone =
        "Please enter a valid phone number so we can confirm your order!";
    }

    if (Object.keys(errors).length > 0) return errors;

    const newOrder = await createOrder(order);

    store.dispatch(clearCart());

    return redirect(`/order/${newOrder.id}`);
  } catch (error) {
    throw new Error(`unable to create order, details: ${error.message}`);
  }
}

export async function MakeOrderPriorityAction({ params }) {
  try {
    const data = { priority: true };
    if (!params.orderId) throw new Error("no order id");
    await updateOrder(params.orderId, data);
    return null;
  } catch (error) {
    throw new Error(
      `unable to update order priority, details: ${error.message}`
    );
  }
}
