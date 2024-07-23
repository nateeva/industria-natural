import React from 'react'

const InputForm = ({...props}) => {
  return (
      <input {...props}  className="font-inter font-medium pl-[6px] block py-2.5 px-0 w-full  text-marron-200 bg-transparent border-0 border-b-2 border-marron-200 appearance-none focus:outline-none focus:ring-0 focus:border-marron-200 peer" placeholder=" " required />
  )
}

export default InputForm
