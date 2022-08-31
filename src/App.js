import { Route, Routes } from "react-router-dom";
import "./App.css";
import Competence from "./components/layout/competence/Competence";
import Home from "./components/layout/Home";
import Layout from "./components/layout/Layout";
import LoginBase from "./components/layout/login/LoginBase";
import Team from "./components/layout/team/Team";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/competence" element={<Competence />} />
        </Route>
        <Route path="/login" element={<LoginBase />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
