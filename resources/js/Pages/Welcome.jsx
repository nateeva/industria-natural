import About from '@/Components/Landing/About';
import BannerIndex from '@/Components/Landing/BannerIndex';
import LandingLayout from '@/Layouts/LandingLayout';
import { Head } from '@inertiajs/react';
import TiendaIndex from '@/Components/Landing/TiendaIndex';

export default function Welcome({ auth }) {
    return (
        <>
            <LandingLayout auth={auth}>
                <Head title="Inicio" />

                <BannerIndex/>

                <section>
                    <About/>
                </section>

                <section>
                    <TiendaIndex/>
                </section>

            </LandingLayout>
        </>
    );
}
