import LandingLayout from '@/Layouts/LandingLayout';
import { Head } from '@inertiajs/react';

export default function Welcome({ auth }) {

    return (
        <>
            <LandingLayout auth={auth}>
                <Head title="Inicio" />

                hola

            </LandingLayout>
        </>
    );
}
