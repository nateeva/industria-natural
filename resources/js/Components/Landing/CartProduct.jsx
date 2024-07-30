import React from 'react'
import { FaTrash } from "react-icons/fa";
import Counter from '../Counter';
import Icon from '../Icon';
import { formatPriceToARS } from '../../utils/utils';

const CartProduct = ({ title = "Título", description = "0 g", price = 0, showIcon = true, showCounter = true }) => {
    const formattedPrice = formatPriceToARS(price);

    return (
        <div className='flex w-full gap-4 font-inter text-marron-200'>
            <img className='object-cover max-w-36' src="images/product_index.png" alt="" />
            <div className='w-full flex flex-col justify-between'>
                <div className='flex items-center justify-between'>
                    <p className='text-[18px] leading-5'>{title}</p>
                    {showIcon && <Icon icon={<FaTrash size={20} />} />}
                </div>

                <p className='text-sm -mt-2'>{description}</p>

                <div className='flex items-center justify-between'>
                    <p className='font-bold'>{formattedPrice}</p>
                    {showCounter && <Counter />}
                </div>
            </div>
        </div>
    )
}

export default CartProduct;

