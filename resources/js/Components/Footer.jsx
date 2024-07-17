import React from 'react'
import NavLink from './NavLink'

const Footer = () => {
    return (
        <div id='contacto' className='flex flex-col justify-center gap-16 py-24 md:flex-row md:justify-around bg-verde-100 font-ebGaramond text-marron-200 '>
            <div className='text-center'>
                <h2 className='text-2xl font-bold'>Contacto</h2>
                <ul className=''>
                    <li><NavLink className='text-base font-normal hover:text-marron-200'>15 1234 6789</NavLink></li>
                    <li><NavLink className='text-base font-normal hover:text-marron-200'>CABA, Arg.</NavLink></li>
                </ul>
            </div>

            <div className='text-center'>
                <h2 className='text-2xl font-bold'>Social</h2>
                <ul className=''>
                    <li><NavLink className='text-base font-normal hover:text-marron-200'>instagram</NavLink></li>
                    <li><NavLink className='text-base font-normal hover:text-marron-200'>whatsApp</NavLink></li>
                </ul>
            </div>

        </div>
    )
}

export default Footer
