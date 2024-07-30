import LandingLayout from '@/Layouts/LandingLayout';
import { Head } from '@inertiajs/react';
import IconSet from "@/Components/CartPage/IconSet";
import BannerTienda from '@/Components/Store/BannerTienda';
import CartList from '@/Components/CartPage/CartList';
import ResumenCompra from '@/Components/CartPage/ResumenCompra';
import FormCart from '@/Components/CartPage/FormCart';
import RadioBox from '@/Components/RadioBox';
import Button from '@/Components/Button';

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
                            <div className='mt-12'>
                                <ResumenCompra showCartProduct={false} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='bg-claro'>
                    <div className='lg:flex justify-center gap-12 mx-auto max-w-7xl px-6 md:px-12'>
                        <div>
                            <FormCart />
                        </div>
                        <div className='lg:w-[350px] mt-12'>
                            <ResumenCompra showCartProduct={true} showButton={false} />
                        </div>
                    </div>
                </section>

                <section className='bg-claro'>
                    <div className='lg:flex justify-center gap-24 mx-auto max-w-7xl px-6 md:px-12'>
                        <div className='lg:w-1/2' >
                            <h2 className=' font-bold text-2xl font-inter text-marron-200 mb-4'>Datos de facturación</h2>
                            <ul className='text-marron-200 font-inter border-b border-marron-200 pb-4 text-sm'>
                                <li>Nombre</li>
                                <li>Documento</li>
                                <li>Teléfono</li>
                                <li>Dirección</li>
                                <li>Ciudad</li>
                            </ul>

                            <div className='font-inter text-marron-200 mt-12'>

                                <h2 className='text-2xl font-bold mb-6'>Elegí tu método de pago</h2>

                                <div className='flex flex-col gap-2 mb-4'>
                                    <RadioBox>Método de pago</RadioBox>
                                    <RadioBox>Método de pago</RadioBox>
                                    <RadioBox>Método de pago</RadioBox>
                                </div>
                            </div>

                            <div className='md:flex gap-6'>
                                <Button color="gris" className="mt-4">atrás</Button>
                                <Button className="mt-4">finalizar compra</Button>
                            </div>

                        </div>
                        <div className='mt-6'>
                            <ResumenCompra showCartProduct={true} showButton={false} />
                        </div>

                    </div>

                </section>

            </LandingLayout>
        </>
    );
}

export default Carrito;
