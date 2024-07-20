import ProductDetail from '@/Components/ProductDetail'
import Related from '@/Components/Related'
import LandingLayout from '@/Layouts/LandingLayout'
import React from 'react'

const Producto = () => {

    return (
        <>
            <LandingLayout>
                <section className='bg-claro '>
                    <ProductDetail />
                </section>

                <section className='bg-claro'>
                    <Related />
                </section>

            </LandingLayout>

        </>

    )
}

export default Producto
