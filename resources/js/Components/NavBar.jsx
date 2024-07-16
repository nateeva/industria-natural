import { Link } from '@inertiajs/react'
import React from 'react'
import NavLinkk from './NavLinkk'
import AppLogo from './AppLogo'
import Icon from './Icon'
import { BiSolidCart } from 'react-icons/bi'

const NavBar = ({ auth, appName }) => {
    return (
        <nav className="py-3 bg-claro">
            <div className='flex items-center justify-between px-5 mx-auto lg:px-16 max-w-8xl'>
                {auth.user ? (
                    <Link
                        href={route('dashboard')}
                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <AppLogo appName={appName} />
                        <div className='flex gap-8'>
                            <NavLinkk>inicio</NavLinkk>
                            <NavLinkk>nosotros</NavLinkk>
                            <NavLinkk>tienda</NavLinkk>
                            <NavLinkk>contacto</NavLinkk>
                        </div>
                        <Icon icon={<BiSolidCart size={26} />} />
                    </>
                )}
            </div>
        </nav>
    )
}

export default NavBar

