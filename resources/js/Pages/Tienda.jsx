import BannerTienda from '@/Components/BannerTienda'
import LandingLayout from '@/Layouts/LandingLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const Tienda = () => {
    return (
        <>
            <LandingLayout>
                <Head title="Tienda" />

                <BannerTienda/>

            </LandingLayout>

        </>
    )
}

export default Tienda
