import { Outlet } from "react-router-dom";
import CompanyMap from "./companyMap/CompanyMap";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <Outlet />
      <CompanyMap />
      <Footer />
    </div>
  );
};

export default Layout;
