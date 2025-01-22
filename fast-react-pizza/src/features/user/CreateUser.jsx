import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import Button from "../../ui/Button";
import Textbox from "../../ui/Textbox";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) {
      console.error("create user username is null on submit");
      return;
    }
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>
      <Textbox
        placeholder="Your full name"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-8 w-72"
      />
      {username !== "" && (
        <div>
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
