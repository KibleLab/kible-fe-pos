import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import './main.css';
import IndexPage from './pages';
import MenuPage from './pages/menu';
import OrdersPage from './pages/orders';
import OrderDetailsPage from './pages/orders/[tableId]';
import CartPage from './pages/cart/[tableId]';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider
      router={createBrowserRouter([
        { path: '/', element: <IndexPage /> },
        { path: '/orders', element: <OrdersPage /> },
        { path: '/orders/:tableId', element: <OrderDetailsPage /> },
        { path: '/menu', element: <MenuPage /> },
        { path: '/cart/:tableId', element: <CartPage /> },
      ])}
    />
  </StrictMode>,
);
