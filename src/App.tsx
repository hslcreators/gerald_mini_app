import { useIntegration } from "@tma.js/react-router-integration";
import { initNavigator } from "@tma.js/sdk-react";
import { useEffect, useMemo } from "react";
import { Route, Router, Routes } from "react-router-dom";
import BackendPage from "./BackendPage";
import FrontendPage from "./FrontendPage";

export default function App() {
  const navigator = useMemo(() => initNavigator("app-navigation-state"), []);
  const [location, reactNavigator] = useIntegration(navigator);

  useEffect(() => {
    navigator.attach();
    return () => navigator.detach();
  }, [navigator]);

  return (
    <Router location={location} navigator={reactNavigator}>
      <Routes>
        <Route path={"/backend"} element={<BackendPage />} />
        <Route path={"/frontend"} element={<FrontendPage />} />
        {/* <Route path={"*"} element={<Navigate to={"/"} />} /> */}
      </Routes>
    </Router>
  );
}
