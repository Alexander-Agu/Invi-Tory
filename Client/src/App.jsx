import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardHome from './components/DashboardHome/DashboardHome';
import InventoryHome from './components/InventoryHome/InventoryHome';
import ItemHome from './components/ItemHome/ItemHome';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import InventoryBoxHome from "./pages/InvitoryBoxHome/InvitoryBoxHome";

function App() {
  const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage 
        // link={"/"}
        title={"Page Not Found"}
        message={"Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or the URL was typed incorrectly."}
        type={"404"}
      />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/dashboard/:userId",
      element: <Dashboard />,
      children: [
        {
          index: true,
          element: <DashboardHome />
        },
        {
          path: "/dashboard/:userId/home",
          element: <DashboardHome />
        },
        {
          path: "/dashboard/:userId/inventory",
          element: <InventoryHome />
        },
        {
          path: "/dashboard/:userId/items",
          element: <ItemHome />
        }
      ],
      errorElement: <ErrorPage 
        // link={"/dashboard/:userId"}
        title={"Page Not Found"}
        message={"Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or the URL was typed incorrectly."}
        type={"404"}
      />
    },
    {
      path: "/dashboard/:userId/inventory/:inventoryId",
      element: <InventoryBoxHome />
    }
]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
