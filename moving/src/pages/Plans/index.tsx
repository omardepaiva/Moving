import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Cards from "../../components/Cards";

import Background from "../../assets/bg1.png";
import "tw-elements";

let sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${Background})`,
};

export default function Plans() {
  return (
    <div>
      <h1>ESTÁ NA PÁGINA PLANOS</h1>
      <NavBar />
      <section style={sectionStyle}>
        <Cards title="Mensal" value={15.8} subtitle="1" />
        <Cards title="Semestral" value={20} subtitle="2" />
        <Cards title="anual" value={50} subtitle="3" />
      </section>
      <Footer />
    </div>
  );
}
