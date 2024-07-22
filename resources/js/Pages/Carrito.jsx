import LandingLayout from '@/Layouts/LandingLayout';
import { Head } from '@inertiajs/react';
import IconSet from "@/Components/CartPage/IconSet";
import BannerTienda from '@/Components/BannerTienda';

export default function Carrito({ auth }) {
    const iconStates = [true, false, false];
    return (
        <>
            <LandingLayout auth={auth}>
                <Head title="Carrito" />

                <BannerTienda />

                <section className='bg-claro'>
                    <IconSet iconStates={iconStates} className="py-12 " />
                </section>






            </LandingLayout>
        </>
    );
}
