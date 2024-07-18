import React from 'react';

const Button = ({ color, children }) => {
    let buttonClass;

    switch (color) {
        case 'marron':
            buttonClass = 'bg-marron-50 hover:bg-marron-100 transition ease-in-out duration-150';
            break;
        case 'gris':
            buttonClass = 'bg-gris-50 hover:bg-gris-100 transition ease-in-out duration-150';
            break;
        default:
            buttonClass = 'bg-verde-100 hover:bg-verde-200 transition ease-in-out duration-150';
    }

    return (
        <button
            className={`${buttonClass} inline-flex items-center justify-center text-white font-medium px-16 py-2 text-[18px] tracking-wide w-full md:w-auto text-center`}
        >
            {children}
        </button>
    );
};

export default Button;
