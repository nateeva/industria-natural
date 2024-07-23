import React from 'react'
import ItemResumen from '../ItemResumen'
import Button from '../Button'

const ResumenCompra = ({ className }) => {
    return (
        <div className={`flex flex-col justify-between md:px-8 md:py-6 md:border border-marron-200 ${className}`}>
            <h2 className='mb-4 text-xl font-bold lg:text-2xl font-inter text-marron-200'>Resumen de Compra</h2>

            <div>
                <ItemResumen className="mb-4" />
                <ItemResumen className="py-4 text-xl font-bold border-t-2 border-verde-100" name='Total' />
                <Button className="mt-6">continuar</Button>
            </div>

        </div>
    )
}

export default ResumenCompra
