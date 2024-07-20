import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'; // Importa los íconos

export default function Accordion({ items }) {
    const [openIndex, setOpenIndex] = useState(null); // Ningún ítem está abierto por defecto

    const handleToggle = index => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full mx-auto space-y-3">
            {items.map((item, index) => (
                <div key={index} className="font-inter text-marron-200">
                    <button
                        onClick={() => handleToggle(index)}
                        className="flex items-center justify-between w-full px-4 py-2 font-bold text-left border-b-2 focus:outline-none border-marron-200 text-[18px] "
                    >
                        {item.title}
                        {index === openIndex ? (
                            <FaChevronUp className="transition-transform duration-300 ease-in-out" />
                        ) : (
                            <FaChevronDown className="transition-transform duration-300 ease-in-out" />
                        )}
                    </button>
                    <div
                        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${index === openIndex ? 'max-h-40' : 'max-h-0'
                            }`}
                    >
                        <div className="p-4">
                            {item.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
