import { Route, Routes } from "react-router-dom";
import "./App.css";
import Competence from "./components/layout/competence/Competence";
import FrontEndPage from "./components/layout/detailPages/frontEndPage";
import BackEndPage from "./components/layout/detailPages/backEndPage";
import DesignPage from "./components/layout/detailPages/designPage";
import Home from "./components/layout/Home";
import Layout from "./components/layout/Layout";
import LoginBase from "./components/layout/login/LoginBase";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/frontEnd" element={<FrontEndPage />} />
          <Route path="/backEnd" element={<BackEndPage />} />
          <Route path="/digitalDesign" element={<DesignPage />} />
          <Route path="/competence" element={<Competence />} />
        </Route>
        <Route path="/login" element={<LoginBase />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
