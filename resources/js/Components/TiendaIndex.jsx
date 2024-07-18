import React from 'react'
import TitlePrimary from './TitlePrimary';
import Button from './Button';


const TiendaIndex = () => {
    const words1 = ["industria"];
    const words2 = ["natural"];

    return (
        <div className='px-6 py-24 bg-claro font-ebGaramond md:px-16 bg-tienda-mobile '>
            <div className='items-center mx-auto md:flex max-w-7xl'>

                <div className='flex-1 order-1'>
                    <div className='flex justify-center'>
                        <TitlePrimary words1={words1} words2={words2} dynamic={false} className="" />
                    </div>

                    <p className='my-8 lg:px-24 font-ebGaramond text-marron-200 md:text-xl md:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro id nemo, laboriosam autem nihil velit ipsam aperiam beatae sit, eos in dolore vel, omnis ratione ipsum corrupti molestias consequatur.</p>
                    
                    <div className='flex justify-center'>
                        <Button color="marron" className="">tienda virtual</Button>
                    </div>
                    
                </div>

                <div className='flex flex-col flex-1 gap-6 mt-8 md:m-0 bg-tienda lg:p-8 '>
                    <img className='md:w-[80%] xl:w-[45%] mx-auto' src="images/product_index_2.png" alt="Imagen de producto" />
                    <img className='md:w-[80%] xl:w-[45%] mx-auto' src="images/product_index.png" alt="Imagen de producto" />
                </div>
            </div>

        </div>
    )
}



export default TiendaIndex

