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
      <section>
        <Cards />
      </section>
      <Footer />
    </div>
  );
}
