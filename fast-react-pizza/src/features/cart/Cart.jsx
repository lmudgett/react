import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../user/userSlice";
import { getCart, clearCart } from "./cartSlice";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import MessageEmptyCart from "../../ui/MessageEmptyCart";

function Cart() {
  const { username } = useSelector(getUser);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  return (
    <div className="px-4 py-3">
      {!Array.isArray(cart) || !cart.length ? (
        <MessageEmptyCart />
      ) : (
        <>
          <LinkButton to="/menu">&larr; Back to menu</LinkButton>
          <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
          <ul className="divide-y divide-stone-200 px-2 border-b mt-3"></ul>
          {cart.map((i) => (
            <CartItem key={i.pizzaId} pizza={i} />
          ))}
          <div className="mt-6 space-x-2">
            <Button to="/order/create">Create your order!</Button>
            <Button
              variant="gray"
              size="sm2"
              onClick={() => dispatch(clearCart())}
            >
              Clear cart
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
