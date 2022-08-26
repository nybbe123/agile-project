import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/layout/Home";
import Layout from "./components/layout/Layout";
import LoginBase from "./components/layout/login/LoginBase";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginBase />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
