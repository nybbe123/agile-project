import { Outlet } from "react-router-dom";
import CompanyMap from "./components/companyMap/CompanyMap";
import Footer from "./Footer";
import Header from "./Header";

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
