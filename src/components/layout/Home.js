import ContactPage from "../layout/contact/contact-page/ContactPage";
import MemberList from "../member/memberList";
import CompanyMap from "./companyMap/CompanyMap";
import Header from "./header/Header";
import Intro from "./intro/Intro";

const Home = () => {
  return (
    <div>
      <Header />
      <Intro />
      <ContactPage />
      <MemberList />
      <CompanyMap />
    </div>
  );
};

export default Home;
