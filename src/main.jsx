import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "../src/pages/HomePage.jsx";
import ProfilePage from "../src/pages/ProfilePage.jsx";
import ProfilePages from "../src/pages/ProfilePages.jsx";
import NotFound from "./pages/NotFound.jsx";
import Layout from "./Layout/index.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";

import ThemeProject from "./Theme/ThemeProject.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/profiles",
        element: <ProfilePages />,
        children: [
          {
            path: "/profiles/:id",
            element: <ProfilePage />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProject>
      <RouterProvider router={router} />
    </ThemeProject>
  </StrictMode>
);
