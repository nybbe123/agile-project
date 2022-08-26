import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Intro from "./intro/Intro";

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
