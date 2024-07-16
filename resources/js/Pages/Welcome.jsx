import TitlePrimary from '@/Components/TitlePrimary';
import LandingLayout from '@/Layouts/LandingLayout';
import { Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    const words1 = ["industria", "productos", "lorem"];
    const words2 = ["natural", "naturales", "ipsum"];

    return (
        <>
            <LandingLayout auth={auth}>
                <Head title="Inicio" />

                <TitlePrimary words1={words1} words2={words2} className="text-red-500" dynamic={true} />
                <TitlePrimary words1={words1} words2={words2} className="text-blue-500" dynamic={false} />

            </LandingLayout>
        </>
    );
}
