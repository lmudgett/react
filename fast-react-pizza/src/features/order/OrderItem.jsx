import { formatCurrency } from "../../util/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { pizzaId, quantity, name, totalPrice } = item;

  return (
    <li id={pizzaId} className="py-3 space-y-1">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span>
          {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients
          ? "Loading..."
          : ingredients
          ? ingredients.join(", ")
          : "No ingredients available"}
      </p>
    </li>
  );
}

export default OrderItem;
