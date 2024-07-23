import React from 'react'
import { formatPriceToARS } from '../../utils/utils';
import Counter from '../Counter';
import Icon from '../Icon';
import { FaTrash } from "react-icons/fa";

const ProductCard = ({ title = "Título de producto", description = "0 g", price = 0 }) => {
    const formattedPrice = formatPriceToARS(price);
    return (
        <>
            <div className='items-center justify-between hidden gap-6 text-marron-200 font-inter md:flex xl:gap-0'>
                <img className='object-cover max-w-44' src="images/product_index.png" alt={`Imágen de ${title}`} />
                <div className=''>
                    <h3 className='font-bold'>{title}</h3>
                    <p>{description}</p>
                </div>
                <Counter />
                <div className='font-bold'>{formattedPrice}</div>
                <Icon icon={<FaTrash size={20} />} />
            </div>
            <div className='md:hidden text-marron-200 font-inter'>
                <img className='object-cover mb-4' src="images/product_index.png" alt={`Imágen de ${title}`} />
                <div className='flex justify-between'>
                    <h3 className='font-bold'>{title}</h3>
                    <Icon icon={<FaTrash size={20} />} />
                </div>
                <p>{description}</p>
                <div className='flex items-center justify-between'>
                    <div className='font-bold'>{formattedPrice}</div>
                    <Counter />
                </div>
            </div>
        </>

    )
}

export default ProductCard
