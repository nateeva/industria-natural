import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import { RiTruckLine } from 'react-icons/ri';
import { PiCreditCardBold } from 'react-icons/pi';

const IconSet = ({ iconStates, className }) => {
    const icons = [
        { icon: <FaCheck key="icon1" size={20} />, label: 'carrito' },
        { icon: <RiTruckLine key="icon2" size={26} />, label: 'envío' },
        { icon: <PiCreditCardBold key="icon3" size={26} />, label: 'pago' },
    ];

    return (
        <div className={`flex items-center justify-center ${className}`}>
            {icons.map((item, index) => (
                <React.Fragment key={index}>
                    {index > 0 && (
                        <hr className="w-32 mx-2 mb-6 border-t-2 border-marron-200" />
                    )}
                    <div className="flex flex-col items-center">
                        <div
                            className={`flex items-center justify-center w-12 h-12 p-2 rounded-full ${iconStates[index] ? 'bg-marron-200 text-white' : 'bg-transparent text-marron-200 border-2 border-marron-200'
                                }`}
                        >
                            {item.icon}
                        </div>
                        <span className="mt-2 text-sm font-semibold text-marron-200 font-inter">{item.label}</span>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

export default IconSet;
