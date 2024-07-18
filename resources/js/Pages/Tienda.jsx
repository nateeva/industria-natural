import BannerTienda from '@/Components/BannerTienda'
import CardProduct from '@/Components/CardProduct'
import LandingLayout from '@/Layouts/LandingLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const Tienda = () => {
    return (
        <>
            <LandingLayout>
                <Head title="Tienda" />

                <BannerTienda/>

                <CardProduct/>

            </LandingLayout>

        </>
    )
}

export default Tienda
