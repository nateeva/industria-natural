import LandingLayout from '@/Layouts/LandingLayout';
import { Head } from '@inertiajs/react';
import IconSet from "@/Components/CartPage/IconSet";
import BannerTienda from '@/Components/Store/BannerTienda';
import CartList from '@/Components/CartPage/CartList';
import ResumenCompra from '@/Components/CartPage/ResumenCompra';
import FormCart from '@/Components/CartPage/FormCart';

const Carrito = ({ auth }) => {
    const iconStates = [true, false, false];
    return (
        <>
            <LandingLayout auth={auth}>
                <Head title="Carrito" />

                <BannerTienda />

                <section className='bg-claro'>
                    <div className='px-6 py-16 space-y-10 md:px-12'>
                        <IconSet iconStates={iconStates} />

                        <div className='justify-center gap-8 xl:gap-12 lg:flex'>
                            <div>
                                <CartList />
                            </div>
                            <div>
                                <ResumenCompra showCartProduct={false} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='bg-claro'>
                    <div className='flex justify-center gap-12 mx-auto max-w-7xl'>
                        <div>
                            <FormCart />
                        </div>
                        <div className='w-[350px]'>
                            <ResumenCompra showCartProduct={true} />
                        </div>
                    </div>
                </section>


            </LandingLayout>
        </>
    );
}

export default Carrito;
