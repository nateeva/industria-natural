import React from 'react'
import RadioBox from './RadioBox';
import Button from './Button';
import { Link } from '@inertiajs/react';



const formatPriceToARS = (value) => {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
    }).format(value);
};


const ProductDetail = ({ title = "Título de producto", price = 0, description = "Lorem ipsum dolor sit amet consectetur adipiscing elit tellus ornare praesent dictum venenatis, ultrices id condimentum class nostra faucibus curae vel vivamus volutpat" }) => {
    const formattedPrice = formatPriceToARS(price);
    return (

        <div className='grid max-w-6xl gap-16 py-24 mx-auto md:grid-cols-2'>
            <div>
                <img src="images/product_index.png" alt={`Imagen de ${title}`} />
            </div>
            <div className='flex flex-col justify-between'>
                <div>links</div>
                <div>
                    <div className='flex flex-col gap-4 font-inter text-marron-200'>
                        <div className='text-3xl font-bold'>
                            <h2>{title}</h2>
                            <p>{formattedPrice}</p>
                        </div>
                        <div className='flex gap-6'>
                            <RadioBox/>
                            <RadioBox />
                        </div>
                        <p>{description}</p>
                    </div>
                </div>
                <div className='flex justify-center gap-2'>
                    <Link href="">
                        <Button color="verde">añadir al carrito</Button>
                    </Link>

                    <Link href="">
                        <Button color="verde">añadir al carrito</Button>
                    </Link>

                </div>
            </div>
        </div>


    )
}

export default ProductDetail
