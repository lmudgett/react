import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../util/helpers";
import { getCartItemExists, addItem } from "../cart/cartSlice";
import Button from "../../ui/Button";
import ButtonDelete from "../../ui/ButtonDelete";
import UpdateQuantity from "../../ui/UpdateQuantity";

const MenuItem = ({ pizza }) => {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  //have to define the object structure so it can be added/updated in the card
  const item = {
    pizzaId: id,
    name: name,
    unitPrice: unitPrice,
    quantity: 1, //this gets updated in the slice
    totalPrice: unitPrice, //this gets updated in the slice
  };

  const dispatch = useDispatch();
  const isItemInCart = useSelector(getCartItemExists(id));

  function handleAddItem() {
    dispatch(addItem(item));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut && "opacity-70 grayscale"}`}
      />
      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex  items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm uppercase font-medium text-stone-500">
              Sold out
            </p>
          )}
          {!soldOut && !isItemInCart && (
            <Button size="sm1" onClick={handleAddItem}>
              Add to cart
            </Button>
          )}
          {isItemInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateQuantity pizza={item} />
              <ButtonDelete id={id} />
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
