import { useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../util/helpers";
import { getUser } from "../user/userSlice";
import Button from "../../ui/Button";

import { getCartPriceTotal } from "../cart/cartSlice";

function ButtonCreateOrder({ withPriority }) {
  const nav = useNavigation;
  const { status: addressStatus } = useSelector(getUser);
  const cartTotalPrice = useSelector(getCartPriceTotal);
  const priorityPrice = cartTotalPrice * 0.2; //priority price is calculated once instead of it being attached to the checkbox,
  // with it attached to the checkbox it could mean multiple calculations when ever someone clicks it on or off
  const totalPrice = withPriority
    ? cartTotalPrice + priorityPrice
    : cartTotalPrice;
  const isSubmit = nav.state === "submitting";
  const isLoadingAddress = addressStatus === "loading";

  return (
    <Button disabled={isSubmit || isLoadingAddress}>
      {isSubmit
        ? "Processing Order"
        : `Order now for ${formatCurrency(totalPrice)}`}
    </Button>
  );
}

export default ButtonCreateOrder;
