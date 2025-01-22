import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  deleteItem,
  getItemQuantity,
} from "../features/cart/cartSlice";
import Button from "./Button";

function UpdateQuantity({ pizza }) {
  const { pizzaId, name, unitPrice } = pizza;
  const dispatch = useDispatch();
  const itemQuantity = useSelector(getItemQuantity(pizzaId));

  function handleAddItem() {
    const item = {
      pizzaId: pizzaId,
      name: name,
      unitPrice: unitPrice,
      quantity: 1,
      totalPrice: unitPrice,
    };
    dispatch(addItem(item));
  }

  return (
    <div className="flex gap-2 items-center md:gap-3">
      <Button size="sm3" onClick={() => dispatch(deleteItem(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-medium">{itemQuantity}</span>
      <Button size="sm3" onClick={handleAddItem}>
        +
      </Button>
    </div>
  );
}

export default UpdateQuantity;
