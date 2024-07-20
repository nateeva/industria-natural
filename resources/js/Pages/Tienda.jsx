import Accordion from '@/Components/Accordion'
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
                    <div className='justify-center max-w-screen-xl px-6 py-12 mx-auto space-y-6 xl:py-24 lg:gap-10 lg:flex md:px-8'>
                        <Filter />
                        <GridProducts />
                    </div>

                </section>

            </LandingLayout>

        </>
    )
}

export default Tienda
