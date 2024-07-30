import React from 'react'
import ProductCard from './ProductCard'
import ResumenCompra from './ResumenCompra'

const CartList = ({className}) => {
    return (
        <div className={`md:py-6 md:px-8 md:border border-marron-200 xl:min-w-[800px] ${className}`}>
            <h2 className='mb-4 font-bold text-2xl font-inter text-marron-200'>Mi Carrito</h2>
            <div className='flex flex-col gap-6'>
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default CartList
