import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardHome from './components/DashboardHome/DashboardHome';
import InventoryHome from './components/InventoryHome/InventoryHome';

function App() {
  const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />,
    
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
        }
      ]
    }
]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
