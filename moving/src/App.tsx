import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./styles/main.css";
function App() {
  return (
    <div>
      <NavBar />
      <div className="w-full">
        <img src="../src/assets/bg1.png" alt="teste" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
