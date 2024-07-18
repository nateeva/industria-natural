import React from 'react'
import Button from './Button'
import { Link } from '@inertiajs/react';

const formatPriceToARS = (value) => {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
    }).format(value);
};

const CardProduct = ({ title = "Título producto", price = 0 }) => {
    const formattedPrice = formatPriceToARS(price);

    return (
        <div className='space-y-4 lg:max-w-sm'>

            <img className='object-cover w-full h-full' src="images/product_index.png" alt={`Fotografía de producto ${title}`} />

            <div className='w-full space-y-2 text-xl font-inter text-marron-200'>
                <p>{title}</p>
                <p>{formattedPrice}</p>
            </div>

            <div className='w-full'>
                <Link href="/tienda">
                    <Button className="">ver más</Button>
                </Link>

            </div>


        </div>
    )
}

export default CardProduct
