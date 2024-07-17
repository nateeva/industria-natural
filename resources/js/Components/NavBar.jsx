import { Link } from '@inertiajs/react'
import React, { useState } from 'react'
import NavLink from './NavLink'
import AppLogo from './AppLogo'
import Icon from './Icon'
import { BiSolidCart } from 'react-icons/bi'
import { HiMenuAlt1 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { Link as ScrollLink } from 'react-scroll';

const NavBar = ({ auth }) => {
    const [open, setOpen] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    return (
        <nav className='fixed w-full shadow-sm bg-claro'>
            <div className='flex justify-between w-[95%] mx-auto px-2 py-3'>
                <Icon
                    onClick={() => setOpen(!open)}
                    icon={<HiMenuAlt1 size={28} />}
                    className="flex items-center lg:hidden"
                />

                <Link href="/">
                    <AppLogo auth={auth} />
                </Link>

                <Icon
                    onClick={() => setOpenCart(!openCart)}
                    icon={<BiSolidCart size={28} />}
                    className="flex items-center lg:hidden"
                />

                {/* desk */}
                <ul className='z-50 items-center justify-start hidden w-1/3 gap-10 lg:flex'>
                    <li><NavLink className='text-xl' href="/">inicio</NavLink></li>
                    <li>
                        <ScrollLink
                        className='text-xl font-semibold transition duration-150 ease-in-out cursor-pointer font-ebGaramond text-marron-200 hover:text-verde-100'
                        to="nosotros"
                        smooth={true}
                        duration={1000}
                        >nosotros
                        </ScrollLink>
                    </li>
                    <li><NavLink className='text-xl' href="/">tienda</NavLink></li>
                    <li>
                        <ScrollLink
                            className='text-xl font-semibold transition duration-150 ease-in-out cursor-pointer font-ebGaramond text-marron-200 hover:text-verde-100'
                            to="contacto"
                            smooth={true}
                            duration={1000}
                        >contacto
                        </ScrollLink>
                    </li>
                </ul>

                {/* fondo opaco para el menú móvil */}
                <div
                    className={`fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                    onClick={() => setOpen(false)}
                ></div>

                {/* fondo opaco para el carrito */}
                <div
                    className={`fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity duration-300 ${openCart ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                    onClick={() => setOpenCart(false)}
                ></div>

                {/* menu mobile */}
                <ul className={`fixed z-50 w-full bg-claro h-screen lg:hidden flex flex-col gap-5 p-7 top-[-10px] duration-700 left-0 ${open ? 'top-12' : 'left-[-100%]'} `}>
                    <li className='flex justify-between pb-2 border-b-[1.5px] border-marron-200'>
                        <Link href="/">
                            <AppLogo auth={auth} />
                        </Link>

                        <Icon onClick={() => setOpen(!open)} icon={<MdOutlineClose size={28} />} />
                    </li>

                    <li><NavLink className='ml-4 text-xl' href="/">inicio</NavLink></li>
                    <li><NavLink className='ml-4 text-xl' href="/#nosotros">nosotros</NavLink></li>
                    <li><NavLink className='ml-4 text-xl' href="/">tienda</NavLink></li>
                    <li><NavLink className='ml-4 text-xl' href="/#contacto">contacto</NavLink></li>
                </ul>

                {/* menu cart mobile */}
                <ul className={`fixed z-50 w-full lg:w-1/4 bg-claro h-screen flex flex-col gap-5 p-7 top-[-10px] duration-700 right-0 ${openCart ? 'top-12' : 'right-[-100%]'} `}>
                    <div className='flex justify-between pb-2 border-b-[1.5px] border-marron-200'>
                        <Link href="/">
                            <AppLogo auth={auth} />
                        </Link>

                        <Icon onClick={() => setOpenCart(!openCart)} icon={<MdOutlineClose size={28} />} />
                    </div>

                    <p className='py-4 font-semibold text-center text-md font-inter text-marron-200'>El carrito está vacío</p>
                </ul>

                <Icon onClick={() => setOpenCart(!openCart)} icon={<BiSolidCart size={28} />} className="items-center hidden lg:flex" />
            </div>
        </nav>
    )
}

export default NavBar
