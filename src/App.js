import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import LoginBase from "./components/layout/login/LoginBase";
import MemberList from "./components/member/memberList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={"HOME???"} />
          <Route path="/team" element={<MemberList />} />
          <Route path="/login" element={<LoginBase />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
