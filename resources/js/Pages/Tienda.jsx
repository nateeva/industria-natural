import BannerTienda from '@/Components/BannerTienda'
import GridProducts from '@/Components/GridProducts'
import LandingLayout from '@/Layouts/LandingLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const Tienda = () => {
    return (
        <>
            <LandingLayout>
                <Head title="Tienda" />

                <BannerTienda/>

                <section>
                    <GridProducts/>
                </section>

            </LandingLayout>

        </>
    )
}

export default Tienda
