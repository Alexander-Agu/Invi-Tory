import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';

function App() {
  const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />
    },
    {
      path: "register",
      element: <Register />
    }
]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
