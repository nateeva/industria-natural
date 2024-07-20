import React from 'react'

const RadioBox = ({peso = "0 g"}) => {
    return (
        <div className="flex items-center font-inter">
            <input
                checked={true}
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 bg-gray-100 border-gray-300 text-marron-200 focus:ring-marron-200 "
            />
            <label
                htmlFor="default-radio-2"
                className="text-sm font-medium text-marron-200 ms-3 "
            >
                {peso}
            </label>
        </div>
    )
}

export default RadioBox
