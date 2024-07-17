import React from 'react'
import TitlePrimary from './TitlePrimary';

const BannerIndex = () => {
    const words1 = ["industria", "productos", "lorem"];
    const words2 = ["natural", "naturales", "ipsum"];
    return (
        <div className='bg-claro'
            style={{
                backgroundImage: "url('/images/bg_textura.png')",
                backgroundRepeat:"no-repeat",
                
                }}
            >

            <div className='grid items-center max-w-6xl md:grid-cols-2 mx-auto h-[90vh] md:h-[60vh] lg:h-[80vh] justify-items-center'>
                <div className=''>
                    <TitlePrimary words1={words1} words2={words2} className="lg:w-[300px]" dynamic={true} />
                </div>

                <img className='w-[80%] -mt-24 md:mt-0' src="/images/bg_estatua.png" alt="estatua antigua" />

            </div>
        </div>
    )
}

export default BannerIndex
