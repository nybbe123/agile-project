import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/layout/Home";
import Layout from "./components/layout/Layout";
import LoginBase from "./components/layout/login/LoginBase";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<LoginBase />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
