import card1 from '../Cards/mcard1.png'
import card2 from '../Cards/mcard2.png'
import card3 from '../Cards/mcard3.png'

export default function Cards() {
  return (
  <div>
    <div className="max-w-md mx-auto mt-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      
      {/* Card Mensal */}
      <div className="md:flex">
        <div className="md:shrink-0">
        <img src={card1} className="h-48 w-full object-cover md:h-full md:w-auto"/>
        </div>
        <div className='p-8'>
            <div className="uppercase tracking-wide text-lg leading-tight text-indigo-900 font-semibold ">Plano Mensal</div>
            <a className='block mt-4 text-lg leading-tight font-extrabold text-black hover:underline'>R$15,00</a>
            <p className='mt-2 text-late-500'> Acesso a vídeos, Consultorias, Planos de exercicios, grupos de Watsapp</p>
        </div>
      </div>
    </div>

      {/* Card Trimestral */}
      <div className="max-w-md mx-auto mt-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
        <img src={card2} className="h-48 w-full object-cover md:h-full md:w-auto"/>
        </div>
        <div className='p-8'>
            <div className="uppercase tracking-wide text-lg leading-tight text-indigo-900 font-semibold ">Plano Trimestral</div>
            <a className='block mt-4 text-lg leading-tight font-extrabold text-black hover:underline'>R$45,00</a>
            <p className='mt-2 text-late-500'> Acesso a vídeos, Consultorias, Planos de exercicios, grupos de Watsapp</p>
        </div>
      </div>
      </div>
      {/* Card Anual */}
      <div className="max-w-md mx-auto mt-10 mb-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
        <img src={card3} className="h-48 w-full object-cover md:h-full md:w-auto"/>
        </div>
        <div className='p-8'>
            <div className="uppercase tracking-wide text-lg leading-tight text-indigo-900 font-semibold ">Plano Anual</div>
            <a className='block mt-4 text-lg leading-tight font-extrabold text-black hover:underline'>R$120,00</a>
            <p className='mt-2 text-late-500'> Acesso a vídeos, Consultorias, Planos de exercicios, grupos de Watsapp</p>
        </div>
        </div>
      </div>
      </div>



  );
}
