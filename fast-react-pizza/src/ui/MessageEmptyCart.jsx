import LinkButton from "./LinkButton";

function MessageEmptyCart() {
  return (
    <div>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <p className="font-semibold pt-6">
        It looks like you cart is currently empty, please go back to the menu to
        add more pizzas! :)
      </p>
    </div>
  );
}

export default MessageEmptyCart;
