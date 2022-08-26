import ContactPage from "../layout/contact/contact-page/ContactPage";
import MemberList from "../member/memberList";
import CompanyMap from "./companyMap/CompanyMap";

const Home = () => {
  return (
    <div>
      <ContactPage />
      <MemberList />
      <CompanyMap />
    </div>
  );
};

export default Home;
