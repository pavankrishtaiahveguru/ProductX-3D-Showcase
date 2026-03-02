import React from "react";
import NavBar from "./components/layout/NavBar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/layout/Footer";
import useLenisScroll from "./hooks/useLenisScroll";
import CursorFollower from "./components/ui/CursorFollower";

const App = () => {
  useLenisScroll();
  return (
    <div className="min-h-screen">
      <CursorFollower />
      <NavBar />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
