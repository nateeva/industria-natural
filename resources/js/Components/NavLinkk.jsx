import { Link } from '@inertiajs/react'
import React from 'react'

const NavLinkk = ({ active = false, className = '', children = 'link', ...props }) => {
  return (
      <Link
          {...props}
          className={
              'font-semibold  transition duration-150 ease-in-out font-ebGaramond text-[18px]' +
              (active
                  ? ' text-verde-100  '
                  : ' text-marron-200 hover:text-verde-100  focus:text-verde-100') +
              className
          }
      >
          {children}
      </Link>
  )
}

export default NavLinkk

