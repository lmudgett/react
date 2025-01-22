import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import PageLoading from "./PageLoading";
import CartOverview from "../features/cart/CartOverview";

function AppLayout() {
  const nav = useNavigation();
  const isPageLoading = nav.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isPageLoading && <PageLoading />}
      <Header />
      <div className="overflow-scroll">
        <main className=" mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
