import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCartQuantityTotal, getCartPriceTotal } from "./cartSlice";
import { formatCurrency } from "../../util/helpers";

function CartOverview() {
  const quantityTotal = useSelector(getCartQuantityTotal);
  const priceTotal = useSelector(getCartPriceTotal);

  if (!quantityTotal) return <></>;

  return (
    <div className="bg-stone-800 text-stone-200 uppercase px-4 py-4 sm:px-6 text-sm md:text-base flex items-center justify-between">
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>{quantityTotal} pizzas</span>
        <span>{formatCurrency(priceTotal)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
