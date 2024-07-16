import { Link } from '@inertiajs/react'
import React from 'react'

const NavLink = ({ active = false, className = '', children = 'link', ...props }) => {
  return (
      <Link
          {...props}
          className={
              'font-semibold  transition duration-150 ease-in-out font-ebGaramond lg:text-[18px] text-xl' +
              (active
                  ? ' text-verde-100 ' + className
                  : ' text-marron-200 hover:text-verde-100  focus:text-verde-100') + className
          }
      >
          {children}
      </Link>
  )
}

export default NavLink

