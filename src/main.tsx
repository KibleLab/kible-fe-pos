import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import "@/main.css";
import IndexPage from "@/pages";
import MenuPage from "@/pages/menu";
import OrdersPage from "@/pages/orders";
import OrderDetailsPage from "@/pages/order-details";
import CartPage from "@/pages/cart";
import SettingsPage from "@/pages/settings";

ModuleRegistry.registerModules([AllCommunityModule]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider
      router={createBrowserRouter([
        { path: "/", element: <IndexPage /> },
        { path: "/orders", element: <OrdersPage /> },
        { path: "/order-details", element: <OrderDetailsPage /> },
        { path: "/cart", element: <CartPage /> },
        { path: "/menu", element: <MenuPage /> },
        { path: "/settings", element: <SettingsPage /> },
      ])}
    />
  </StrictMode>,
);
