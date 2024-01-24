import RootLayout from "@layout/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//=========================================
// pages imports
//=========================================
import ItemsList from "@pages/ItemsList";
import AddItem from "@pages/AddItem";
import Checkout from "@pages/Checkout";
import PagesList from "@pages/PagesList";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <PagesList /> },
        { path: "itemslist", element: <ItemsList /> },
        { path: "additem", element: <AddItem /> },
        { path: "checkout", element: <Checkout /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
