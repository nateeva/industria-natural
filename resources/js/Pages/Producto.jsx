import ProductDetail from '@/Components/ProductDetail'
import LandingLayout from '@/Layouts/LandingLayout'
import React from 'react'

const Producto = () => {

    return (
        <>
            <LandingLayout>
                <section className='bg-claro'>
                    <ProductDetail />
                </section>


            </LandingLayout>

        </>

    )
}

export default Producto
