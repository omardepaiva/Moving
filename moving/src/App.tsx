import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import NaviTeste from "./components/Teste";
import "./styles/main.css";
function App() {
  return (
    <div>
      <NavBar />
      <div className="w-full">
        <img src="../src/assets/bg1.png" alt="teste" />
      </div>
      <NaviTeste/>
      <Footer />
    </div>
  );
}

export default App;
