import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import FrontendPage from "./FrontendPage.tsx";
import BackendPage from "./BackendPage.tsx";
import "./index.css";
import { SDKProvider } from "@tma.js/sdk-react";

export const router = createBrowserRouter([
  { path: "/", Component: App },
  { path: "/frontend", Component: FrontendPage },
  { path: "/backend", Component: BackendPage },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SDKProvider acceptCustomStyles>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </SDKProvider>
  </React.StrictMode>
);
