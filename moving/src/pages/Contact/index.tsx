import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

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
export default function Contact() {
  return (
    <div>
      <h1>ESTÁ NA PÁGINA Contato</h1>
      <NavBar />
      <section style={sectionStyle}>
        <div className="flex justify-center justify-items-center container">
          <div className="block p-6 mx-2 my-28 rounded-lg shadow-lg bg-white max-w-full">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              Contato
            </h5>
            <p className="text-gray-700 text-base mb-4">icone + email aqui</p>
            <p className="text-gray-700 text-base mb-4">
              icone + telefone aqui
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
