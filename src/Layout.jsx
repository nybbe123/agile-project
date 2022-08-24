import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import CompanyMap from "./components/companyMap/CompanyMap";

const Layout = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
