import React from 'react'
import CardProduct from './CardProduct'

const GridProducts = () => {
    return (
        <div className='bg-claro'>
            <div className='grid gap-6 mx-auto md:max-w-3xl lg:max-w-6xl md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </div>
        </div>

    )
}

export default GridProducts
