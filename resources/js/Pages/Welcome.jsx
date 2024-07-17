import About from '@/Components/About';
import BannerIndex from '@/Components/BannerIndex';
import TiendaIndex from '@/Components/TiendaIndex';
import LandingLayout from '@/Layouts/LandingLayout';
import { Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    // const words1 = ["industria", "productos", "lorem"];
    // const words2 = ["natural", "naturales", "ipsum"];

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
