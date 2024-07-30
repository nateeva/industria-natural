import React from 'react'
import RadioBox from '../RadioBox';
import Button from '../Button';
import Counter from '../Counter';
import Breadcrumb from './Breadcrumb';
import Accordion from './Accordion';
import { formatPriceToARS } from '../../utils/utils';
import { Link } from '@inertiajs/react';


const ProductDetail = ({ title = "Título de producto", price = 0, description = "Lorem ipsum dolor sit amet consectetur adipiscing elit tellus ornare praesent dictum venenatis, ultrices id condimentum class nostra faucibus curae vel vivamus volutpat" }) => {
    const formattedPrice = formatPriceToARS(price);
    const crumbs = [
        { label: 'Inicio', path: '/' },
        { label: 'Tienda', path: '/tienda' },
        { label: 'Producto', path: '/producto' },
    ];

    const items = [
        { title: 'Detalles', content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit tellus ornare praesent dictum venenatis, ultrices id condimentum class nostra faucibus curae vel vivamus volutpat' },
        { title: 'Modo de uso', content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit tellus ornare praesent dictum venenatis, ultrices id condimentum class nostra faucibus curae vel vivamus volutpat' },
        { title: 'Información adicional', content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit tellus ornare praesent dictum venenatis, ultrices id condimentum class nostra faucibus curae vel vivamus volutpat' },
    ];
    return (

        <div className='max-w-6xl px-6 py-12 mx-auto space-y-12 lg:py-24 md:p-12'>

            <div className='grid gap-6 lg:gap-16 md:grid-cols-2 '>

                <div className='flex flex-col justify-between gap-4'>
                    <Breadcrumb crumbs={crumbs} />
                    <div>
                        <div className='flex flex-col gap-4 font-inter text-marron-200'>
                            <div className='text-4xl font-bold'>
                                <h2>{title}</h2>
                                <p>{formattedPrice}</p>
                            </div>
                            <div className='flex gap-6'>
                                <RadioBox />
                                <RadioBox />
                            </div>
                            <p>{description}</p>
                        </div>
                    </div>

                    <div className='space-y-3 lg:flex lg:gap-6 lg:space-y-0'>
                        <Counter />

                        {/* Ventana pop-up añadir al carrito */}
                        <Link href="/carrito">
                            <Button color="verde">añadir al carrito</Button>
                        </Link>

                    </div>
                </div>

                <div className='md:order-first'>
                    <img className='object-cover md:h-full' src="images/product_index.png" alt={`Imagen de ${title}`} />
                </div>
            </div>

            <div className='px-4 pt-6'>
                <Accordion items={items} />
            </div>

        </div>

    )
}

export default ProductDetail