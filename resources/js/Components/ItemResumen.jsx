import React from 'react'
import { formatPriceToARS } from '../utils/utils';

const ItemResumen = ({ name = "title", className, price = 0 }) => {
    const formattedPrice = formatPriceToARS(price);
    return (
        <div className={`flex font-inter ${className} text-marron-200 justify-between`}>
            <div>
                {name}
            </div>
            <div>
                {formattedPrice}
            </div>
        </div>
    )
}

export default ItemResumen
