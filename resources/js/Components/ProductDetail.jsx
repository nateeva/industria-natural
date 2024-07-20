import React from 'react'
import RadioBox from './RadioBox';
import Button from './Button';
import { Link } from '@inertiajs/react';
import Counter from './Counter';
import Breadcrumb from './Breadcrumb';



const formatPriceToARS = (value) => {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
    }).format(value);
};


const ProductDetail = ({ title = "Título de producto", price = 0, description = "Lorem ipsum dolor sit amet consectetur adipiscing elit tellus ornare praesent dictum venenatis, ultrices id condimentum class nostra faucibus curae vel vivamus volutpat" }) => {
    const formattedPrice = formatPriceToARS(price);
    const crumbs = [
        { label: 'Inicio', path: '/' },
        { label: 'Tienda', path: '/tienda' },
        { label: 'Producto', path: '/producto' },
    ];
    return (

        <div className='grid max-w-6xl gap-6 px-6 py-12 mx-auto lg:gap-16 lg:py-24 md:grid-cols-2 md:p-12'>

            <div className='flex flex-col justify-between gap-4'>
                <Breadcrumb crumbs={crumbs} />
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

                <div className='space-y-3 lg:flex lg:gap-6 lg:space-y-0'>
                    <Counter/>
                    <Button color="verde">añadir al carrito</Button>
                </div>
            </div>

            <div className='md:order-first'>
                <img className='object-cover md:h-full ' src="images/product_index.png" alt={`Imagen de ${title}`} />
            </div>
        </div>

    )
}

export default ProductDetail
