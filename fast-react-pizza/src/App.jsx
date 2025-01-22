import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import MessageError from "./ui/MessageError";
import AppLayout from "./ui/AppLayout";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import User from "./features/user/CreateUser";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import {
  getMenuLoader as menuLoader,
  getOrderLoader as orderLoader,
} from "./services/Loaders";
import { CreateOrderAction, MakeOrderPriorityAction } from "./services/Actions";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <MessageError />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <MessageError />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/user/create",
        element: <User />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        action: MakeOrderPriorityAction,
        errorElement: <MessageError />,
      },
      {
        path: "/order/create",
        element: <CreateOrder />,
        action: CreateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
