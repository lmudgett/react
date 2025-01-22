import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "../ui/Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 text-center sm:my-16 px-4">
      <h1 className="text-xl text-stone-700 font-semibold md-8 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {!username ? (
        <CreateUser />
      ) : (
        <div className="mt-2">
          <Button to="/menu" type="primary">
            Go to Menu
          </Button>
        </div>
      )}
    </div>
  );
}

export default Home;
