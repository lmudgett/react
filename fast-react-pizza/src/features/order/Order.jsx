// Test ID: IIDSAT S60N10
import { useFetcher, useLoaderData } from "react-router-dom";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../util/helpers";
import OrderItem from "../order/OrderItem";
import { useEffect } from "react";
import ButtonMakePriority from "./ButtonMakePriority";

const Order = () => {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  const fetcher = useFetcher();
  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher]
  );
  const isLoading = fetcher.state === "loading";
  const ingredientsMap = new Map(
    fetcher.data?.map((el) => [el.id, el.ingredients])
  );

  return (
    <div className="px-4 py-6 space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="bg-red-500 rounded-full text-sm py-1 px-3 uppercase font-semibold text-red-50 tracking-wide">
              Priority
            </span>
          )}
          <span className="bg-green-500 rounded-full text-sm py-1 px-3 uppercase font-semibold text-green-50 tracking-wide">
            {status} order
          </span>
        </div>
      </div>
      <ul className="divide-y divide-stone-200 px-2 border-b border-t mt-3">
        {cart.map((i) => (
          <OrderItem
            isLoadingIngredients={isLoading}
            ingredients={ingredientsMap.get(i.pizzaId)}
            key={i.pizzaId}
            item={i}
          />
        ))}
      </ul>
      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-x text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <div className="space-y-2 bg-stone-200 py-5 px-6">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      <ButtonMakePriority order={order} />
    </div>
  );
};

export default Order;
