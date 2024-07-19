import React from 'react';

const Select = ({ categoria = "Categoria", setSelected, setIsOpen }) => {
    const handleClick = () => {
        setSelected(categoria);
        setIsOpen(false); // Close the dropdown after selection
    };

    return (
        <li className='p-2 font-medium hover:bg-[#DEDCD6] cursor-pointer' onClick={handleClick}>
            {categoria}
        </li>
    );
}

export default Select;
