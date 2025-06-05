import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

function App() {
  const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />
    },
    {
      path: "register",
      element: <Register />
    },
    {
      path: "login",
      element: <Login />
    }
]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
