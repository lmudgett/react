import { formatCurrency } from "../../util/helpers";
import ButtonDelete from "../../ui/ButtonDelete";
import UpdateQuantity from "../../ui/UpdateQuantity";

function CartItem({ pizza }) {
  const { pizzaId, name, quantity, totalPrice } = pizza;

  return (
    <li
      id={pizzaId}
      className="py-3 sm:flex sm:items-center sm:justify-between"
    >
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateQuantity pizza={pizza} />
        <ButtonDelete id={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
