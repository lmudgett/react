import { useNavigate, useRouteError } from "react-router-dom";

function MessageError() {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div className="m-2">
      <h1>Something went wrong 😢</h1>
      <p>{error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default MessageError;
