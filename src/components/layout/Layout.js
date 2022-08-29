import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Services from "./services/services";
import Intro from "./intro/Intro";


const Layout = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <Services />

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
