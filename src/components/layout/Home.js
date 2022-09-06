import { useContext, useEffect } from "react";
import LinkContext from "../../context/LinkContext";
import Member from "../member/member";
import CompanyMap from "./companyMap/CompanyMap";
import Contact from "./contact/contact-page/Contact";
import Intro from "./intro/Intro";
import Services from "./services/services";

const Home = () => {
  const linkCtx = useContext(LinkContext);

  useEffect(() => {
    linkCtx.onNavigate(false);
  }, [linkCtx]);

  return (
    <div>
      <Intro />
      <Services />
      <Contact />
      <Member />
      <CompanyMap />
    </div>
  );
};

export default Home;
