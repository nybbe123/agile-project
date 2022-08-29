import ContactPage from "../layout/contact/contact-page/ContactPage";
import MemberList from "../member/memberList";
import CompanyMap from "./companyMap/CompanyMap";
import Intro from "./intro/Intro";
import Services from "./services/services";

const Home = () => {
  return (
    <div>
      <Intro />
      <Services />
      <ContactPage />
      <MemberList />
      <CompanyMap />
    </div>
  );
};

export default Home;
