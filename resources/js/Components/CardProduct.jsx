import React from 'react'
import Button from './Button'
import { Link } from '@inertiajs/react';
import { formatPriceToARS } from '../utils/utils';

const CardProduct = ({ title = "Título producto", price = 0 }) => {
    const formattedPrice = formatPriceToARS(price);

    return (

        <div class="w-full md:max-w-sm bg-claro ">
            <div className='h-64'>
                <img class="object-cover h-full w-full" src="images/product_index_2.png" alt={`Fotografía de producto ${title}`} />
            </div>

            <div class="py-5 text-marron-200 font-inter">

                <h2 class="mb-2 text-xl font-bold tracking-tight">{title}</h2>
                <p class="mb-3">{formattedPrice}</p>

            </div>

            <div className='w-full'>
                <Link href="/producto">
                    <Button className="">ver más</Button>
                </Link>

            </div>
        </div>
    )
}

export default CardProduct
