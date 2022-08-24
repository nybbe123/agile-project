import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import MemberList from "./memberList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={"HOME???"} />
          <Route path="/team" element={<MemberList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
