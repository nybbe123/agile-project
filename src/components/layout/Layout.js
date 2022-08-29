import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";

const Layout = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
