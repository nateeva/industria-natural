import React from 'react'
import TitlePrimary from './TitlePrimary'
import GridProducts from './GridProducts';

const Related = () => {
    const words1 = ["quizás"];
    const words2 = ["te interesa"];

    return (
        <div className='pb-24'>
            <div className='flex justify-center mb-8'>
                <TitlePrimary words1={words1} words2={words2} dynamic={false} className="" />
            </div>
            <div>
                <GridProducts />
            </div>
        </div>

    )
}

export default Related
