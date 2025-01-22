import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [orderId, setOrderId] = useState("");
  const nav = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!orderId) {
      console.error("order id " + orderId + " not found!");
      return;
    }
    nav(`/order/${orderId}`);
    setOrderId("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order #"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        className="rounded-full text-sm bg-yellow-100 px-4 py-2 
          placeholder:text-stone-400 w-28 sm:w-64 sm:focus:w-72 transition-all 
          duration-300 focus:outline-none focus:ring focus:ring-yellow-500 
          focus:ring-opacity-50"
      />
    </form>
  );
}

export default SearchOrder;
