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

        <div class="w-full md:max-w-sm bg-claro p-6">
            <div className='h-64'>
                <img class="object-cover h-full w-full" src="images/product_index_2.png" alt={`Fotografía de producto ${title}`} />
            </div>

            <div class="py-5 text-marron-200 font-inter">

                <h2 class="mb-2 text-2xl font-bold tracking-tight">{title}</h2>

                <p class="mb-3">{formattedPrice}</p>

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
