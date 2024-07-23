import React from 'react'
import Label from '../LabelForm'
import LabelForm from '../LabelForm'
import InputForm from '../InputForm'

const FormCart = () => {
    return (
        <form class="">
            <div className='space-y-12'>
                <div className='font-inter text-marron-200'>
                    <div className='mb-6'>
                        <h2 className='text-2xl font-bold'>Ingresá tu correo</h2>
                        <p>Para recibir el resumen de tu compra</p>
                    </div>

                    <div className='flex w-full gap-12 mb-4'>
                        <div class="relative z-0 w-full font-inter">
                            <InputForm />
                            <LabelForm>Correo electrónico</LabelForm>
                        </div>
                    </div>
                </div>

                <div className='font-inter text-marron-200'>
                    <div className='mb-6'>
                        <h2 className='text-2xl font-bold'>Datos personales</h2>
                        <p>Ingresá tus datos personales a continuación</p>
                    </div>

                    <div className='flex w-full gap-12 mb-4'>
                        <div class="relative z-0 w-full font-inter">
                            <InputForm />
                            <LabelForm>Nombre</LabelForm>
                        </div>

                        <div class="relative z-0 w-full font-inter">
                            <InputForm />
                            <LabelForm>Apellido</LabelForm>
                        </div>
                    </div>

                    <div className='flex w-full gap-12'>
                        <div class="relative z-0 w-full font-inter">
                            <InputForm />
                            <LabelForm>Documento</LabelForm>
                        </div>

                        <div class="relative z-0 w-full font-inter">
                            <InputForm />
                            <LabelForm>Teléfono</LabelForm>
                        </div>
                    </div>
                </div>

                <div className='font-inter text-marron-200'>
                    <div className='mb-6'>
                        <h2 className='text-2xl font-bold'>Datos de envío</h2>
                        <p>¿A qué dirección enviamos tu pedido?</p>
                    </div>

                    <div className='flex gap-12 mb-4'>
                        <div class="relative z-0 w-full font-inter">
                            <InputForm />
                            <LabelForm>Calle</LabelForm>
                        </div>

                        <div className='flex gap-8'>
                            <div class="relative z-0 w-full font-inter">
                                <InputForm />
                                <LabelForm>Apellido</LabelForm>
                            </div>
                            <div class="relative z-0 w-full font-inter">
                                <InputForm />
                                <LabelForm>Apellido</LabelForm>
                            </div>
                        </div>

                    </div>

                    <div className='flex w-full gap-12'>
                        <div class="relative z-0 w-full font-inter">
                            <InputForm />
                            <LabelForm>Documento</LabelForm>
                        </div>

                        <div class="relative z-0 w-full font-inter">
                            <InputForm />
                            <LabelForm>Teléfono</LabelForm>
                        </div>
                    </div>
                </div>
            </div>



        </form>


    )
}

export default FormCart
