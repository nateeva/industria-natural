import React from 'react'

const LabelForm = ({children, ...props}) => {
  return (
      <label {...props} class="pl-2 absolute font-medium text-marron-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-marron-200  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{children}</label>
  )
}

export default LabelForm
