import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from "./pages";
import { ErrorElement } from "./components";
import { loader as landingLoaader } from "./pages/Landing";
import { loader as productsLoaader } from "./pages/Products";
import { loader as singleProductLoaader } from "./pages/SingleProduct";
import { loader as checkoutLoader } from "./pages/Checkout";
import { loader as ordersLoader } from "./pages/Orders";

import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as checkoutAction } from "./components/CheckoutForm";
import { store } from "./store";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <ErrorElement />,
          loader: landingLoaader,
        },
        {
          path: "products",
          element: <Products />,
          errorElement: <ErrorElement />,
          loader: productsLoaader,
        },
        {
          path: "products/:id",
          element: <SingleProduct />,
          errorElement: <ErrorElement />,
          loader: singleProductLoaader,
        },
        {
          path: "cart",
          element: <Cart />,
          errorElement: <ErrorElement />,
        },
        {
          path: "about",
          element: <About />,
          errorElement: <ErrorElement />,
        },
        {
          path: "checkout",
          element: <Checkout />,
          errorElement: <ErrorElement />,
          loader: checkoutLoader(store),
          action: checkoutAction(store),
        },
        {
          path: "orders",
          element: <Orders />,
          errorElement: <ErrorElement />,
          loader: ordersLoader(store),
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
      action: loginAction(store),
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
      action: registerAction,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
