import { useState } from "react";
import { Form, useActionData } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../user/userSlice";
import { getCart } from "../cart/cartSlice";
import Textbox from "../../ui/Textbox";
import MessageEmptyCart from "../../ui/MessageEmptyCart";
import OrderLocation from "./OrderLocation";
import ButtonCreateOrder from "./ButtonCreateOrder";

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const actionData = useActionData();
  const { username } = useSelector(getUser);
  const cart = useSelector(getCart);

  return (
    <div className="px-4 py-6">
      {!Array.isArray(cart) || !cart.length ? (
        <MessageEmptyCart />
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-8">
            Ready to order? Let&apos;s go!
          </h2>
          <Form method="POST">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
              <label className="sm:basis-40">Name</label>
              <Textbox
                name="customer"
                defaultValue={username}
                className="grow"
              />
            </div>
            <div className="mb-5 flex flex-wrap flex-col gap-2 sm:flex-row sm:items-center">
              <label className="sm:basis-40">Phone number</label>
              <div className="grow">
                <Textbox className="w-full" type="tel" name="phone" />
              </div>
              {actionData?.phone && (
                <p className="mt-2 text-xs text-red-700 p-2 rounded-md bg-red-100">
                  {actionData.phone}
                </p>
              )}
            </div>
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center relative">
              <label className="sm:basis-40">Address</label>
              <div className="grow">
                <OrderLocation />
              </div>
            </div>
            <div className="mb-12 flex items-center gap-5">
              <input
                className="h-6 w-6 accent-yellow-400 focus:outline-none 
                  focus:ring focus:ring-yellow-400 focus:ring-offset-2"
                type="checkbox"
                name="priority"
                id="priority"
                value={withPriority}
                onChange={(e) => setWithPriority(e.target.checked)}
              />
              <label htmlFor="priority" className="font-medium">
                Want to yo give your order priority?
              </label>
            </div>
            <div>
              <input type="hidden" name="cart" value={JSON.stringify(cart)} />
              <ButtonCreateOrder withPriority={withPriority} />
            </div>
          </Form>
        </>
      )}
    </div>
  );
}

export default CreateOrder;
