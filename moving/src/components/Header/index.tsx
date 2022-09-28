import BgImagem from "../../assets/bg1.png";
export default function Header(){
  return(
    <div className="text-center bg-gray-50 text-gray-800 py-24 px-6">
            <div>
              
            </div>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
              Treino da melhor qualidade <br />
              <span className="text-purple-600">Moving Acompanhamento</span>
            </h1>
            <img src={BgImagem} alt="" />
            <a
              className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              href="#!"
              role="button"
            >
              Get started
            </a>
         
          </div>
  )
}