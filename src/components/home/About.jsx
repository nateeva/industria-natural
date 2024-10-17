import TitlePrimary from "../TitlePrimary";

export const About = () => {
  const words1 = ["industria"];
  const words2 = ["natural"];

  return (
    <div id='nosotros' className='px-6 py-20 text-white bg-marron-50 font-ebGaramond md:px-16 lg:h-[100vh] flex items-center bg-about' >

      <div className='mx-auto max-w-7xl'>

        <div className='flex justify-center lg:justify-start'>
          <TitlePrimary words1={words1} words2={words2} dynamic={false} className="mb-12 text-white lg:mb-16" />
        </div>

        <div className='flex flex-col gap-8 text-base lg:gap-16 md:text-xl lg:flex-row'>
          <p className='flex-1'>En industria natural tenemos años de experiencia en traer a la argentina los productos mas innovadores para la salud fisica y mental. El criterio para la selección es ofrecer lo que nosotros consumimos en lo cotidiano, según las necesidades.</p>

          <p className='flex-1'>Creemos firmemente en la importancia de conectar con productos que no solo mejoran la salud física, sino que también favorecen el equilibrio mental y emocional. Cada producto que ofrecemos ha sido probado y evaluado por nosotros, garantizando confianza y efectividad en cada compra.</p>
        </div>
      </div>
    </div>
  );
}
