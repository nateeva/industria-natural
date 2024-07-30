import React from 'react'
import ItemResumen from '../ItemResumen'
import Button from '../Button'
import CartProduct from '../Landing/CartProduct'

const ResumenCompra = ({ className, showCartProduct = true, showButton = true }) => {
    return (
        <div className={`flex flex-col justify-between md:px-8 md:py-6 md:border border-marron-200  ${className}`}>
            <div>
                <h2 className=' font-bold text-2xl font-inter text-marron-200 mb-8'>Resumen de Compra</h2>
                <div className='space-y-6'>
                    {showCartProduct && <CartProduct title="Melena de León" description="500 g" price={1000} showIcon={false} showCounter={false} />}
                    {showCartProduct && <CartProduct title="Titulo de producto" description="500 g" price={1000} showIcon={false} showCounter={false} />}
                </div>
            </div>

            <div className='mt-12'>
                <ItemResumen className="mb-4" />
                <ItemResumen className="py-4 text-xl font-bold border-t-2 border-verde-100" name='Total' />
                {showButton && <Button className="mt-4">continuar</Button>}
            </div>
        </div>
    )
}

export default ResumenCompra;

