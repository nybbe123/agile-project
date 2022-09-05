import { Route, Routes } from "react-router-dom";
import "./App.css";
import BackEndPage from "./components/layout/detailPages/backEndPage";
import DesignPage from "./components/layout/detailPages/designPage";
import FrontEndPage from "./components/layout/detailPages/frontEndPage";
import Home from "./components/layout/Home";
import Layout from "./components/layout/Layout";
import LoginBase from "./components/layout/login/LoginBase";
import Team from "./components/layout/team/Team";
import { LinkContextProvider } from "./context/LinkContext";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <LinkContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/frontEnd" element={<FrontEndPage />} />
            <Route path="/backEnd" element={<BackEndPage />} />
            <Route path="/digitalDesign" element={<DesignPage />} />
            <Route path="/team" element={<Team />} />
          </Route>
          <Route path="/login" element={<LoginBase />} />
        </Routes>
      </LinkContextProvider>
    </UserContextProvider>
  );
}

export default App;
