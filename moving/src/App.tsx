import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.css";
import Home from "./pages/Home";

import Plans from "./pages/Plans";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/plans" element={<Plans />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
