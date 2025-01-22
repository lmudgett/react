import { useDispatch } from "react-redux";
import { deleteItems } from "../features/cart/cartSlice";
import Button from "./Button";

function ButtonDelete({ id }) {
  const dispatch = useDispatch();
  return (
    <>
      <Button size="sm1" onClick={() => dispatch(deleteItems(id))}>
        X
      </Button>
    </>
  );
}

export default ButtonDelete;
