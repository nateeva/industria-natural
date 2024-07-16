import React from 'react'

const Icon = ({icon, ...props}) => {
  return (
      <div {...props} className='transition duration-150 ease-in-out hover:text-verde-50 text-marron-200 '>
        {icon}
    </div>
  )
}

export default Icon
