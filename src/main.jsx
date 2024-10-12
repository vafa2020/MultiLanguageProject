import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import Layout from "./Layout/index.jsx";
import ThemeProject from "./Theme/ThemeProject.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Product from "./pages/Product.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import ThemeDarkModeProvider from "./Context/index.jsx";

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
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeDarkModeProvider>
      <ThemeProject>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProject>
    </ThemeDarkModeProvider>
  </StrictMode>
);
