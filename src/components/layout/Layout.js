import { Outlet } from "react-router-dom";
import CompanyMap from "./companyMap/CompanyMap";
import ContactPage from "./contact/contact-page/ContactPage";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <Outlet />
      <ContactPage />
      <CompanyMap />
      <Footer />
    </div>
  );
};

export default Layout;
