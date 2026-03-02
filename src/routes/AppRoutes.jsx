import { Routes, Route } from "react-router-dom";
import { routes } from "./routeConfig.jsx";
import { AnimatePresence } from "framer-motion";

const AppRoutes = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
