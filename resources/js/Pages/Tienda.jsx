import BannerTienda from '@/Components/BannerTienda'
import Filter from '@/Components/Filter'
import GridProducts from '@/Components/GridProducts'
import LandingLayout from '@/Layouts/LandingLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const Tienda = () => {
    return (
        <>
            <LandingLayout>
                <Head title="Tienda" />

                <BannerTienda />

                <section className=' bg-claro'>
                    <div className='justify-center max-w-screen-xl mx-auto xl:gap-10 lg:flex'>
                        <Filter />
                        <GridProducts />
                    </div>

                </section>

            </LandingLayout>

        </>
    )
}

export default Tienda
