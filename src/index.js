import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/index';
import Speech from './pages/speech';
import Admin from './pages/admin';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: `/speech/:author`,
    element: <Speech />,
  },
  {
    path: `/admin`,
    element: <Admin />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
