import { Outlet } from "react-router-dom";
import CompanyMap from "./companyMap/CompanyMap";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Services from "./services/services";

const Layout = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <Services />
      <Outlet />
      <CompanyMap />
      <Footer />
    </div>
  );
};

export default Layout;
