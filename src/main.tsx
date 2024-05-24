import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.tsx";
import "./index.css";
import { SDKProvider } from "@tma.js/sdk-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SDKProvider acceptCustomStyles>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </SDKProvider>
  </React.StrictMode>
);
