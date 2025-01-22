import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser, fetchAddress } from "../user/userSlice";
import Textbox from "../../ui/Textbox";
import Button from "../../ui/Button";

function OrderLocation() {
  const {
    status: addressStatus,
    position,
    address,
    error: addressError,
  } = useSelector(getUser);
  const [addressField, setAddressField] = useState(address);
  const dispatch = useDispatch();
  const isLoadingAddress = addressStatus === "loading";

  return (
    <>
      <Textbox
        disabled={isLoadingAddress}
        className="w-full"
        name="address"
        value={addressField}
        onChange={(e) => setAddressField(e.target.value)}
      />
      {addressStatus === "error" && (
        <p className="mt-2 text-xs text-red-700 p-2 rounded-md bg-red-100">
          {addressError}
        </p>
      )}
      <Button
        size="sm1"
        className="absolute right-[3px] mt-[2.5px] md:mt-[4.5px] top-8 sm:top-0 z-50"
        disabled={isLoadingAddress}
        onClick={(e) => {
          e.preventDefault();
          dispatch(fetchAddress());
          setAddressField(address);
        }}
      >
        Get Location
      </Button>
      <input
        type="hidden"
        name="location"
        value={
          position.longitude && position.longitude
            ? `${position.latitude},${position.longitude}`
            : ""
        }
      />
    </>
  );
}

export default OrderLocation;
