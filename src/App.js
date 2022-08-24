import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={"HOME???"} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
