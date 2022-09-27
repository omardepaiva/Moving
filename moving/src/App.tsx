import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ImgTeste from "../src/assets/earth.jpg";
import "./styles/main.css";
function App() {
  return (
    <div>
      <NavBar />
      <div className="w-36">
        <img src="../src/assets/earth.jpg" alt="teste" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
