import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";

function ButtonMakePriority({ order }) {
  const { status, priority } = order;
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      {!priority && status !== "delivered" && <Button>Make Priority</Button>}
    </fetcher.Form>
  );
}

export default ButtonMakePriority;
