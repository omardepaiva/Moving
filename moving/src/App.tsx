import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Plans from "./pages/Plans";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route  path="/plans" element={<Plans/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
