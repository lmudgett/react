import { useSelector } from "react-redux";
import { getUser } from "../user/userSlice";

function Username() {
  const { username } = useSelector(getUser);

  return (
    <>
      {username != "" && (
        <div className="text-sm font-semibold hidden md:block">{username}</div>
      )}
    </>
  );
}

export default Username;
