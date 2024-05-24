import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.tsx'
import FrontendPage from './FrontendPage.tsx';
import './index.css'


export const router = createBrowserRouter([
  {
    path: "/",
    Component: App
  },
  {
    path: "/frontend",
    Component: FrontendPage
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
)
