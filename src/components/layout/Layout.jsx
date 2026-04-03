import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ScrollToTop /> {/* ✅ IMPORTANT */}
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
