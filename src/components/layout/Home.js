import ContactPage from "../layout/contact/contact-page/ContactPage";
import MemberList from "../member/memberList";
import CompanyMap from "./companyMap/CompanyMap";
import Intro from "./intro/Intro";
import Services from "./services/services";
import Header from "./header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Services />
      <ContactPage />
      <MemberList />
      <CompanyMap />
    </div>
  );
};

export default Home;
