import React, { useState } from 'react';
import Select from './Select';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SelectForm = ({ title }) => {
    const [selected, setSelected] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className='w-full'>
            <div
                className='flex items-center justify-between w-full p-2 font-medium transition-all duration-200 border-b-2 cursor-pointer border-marron-200'
                onClick={toggleDropdown}
            >
                {selected ? selected : title}
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-60' : 'max-h-0'}`}>
                <ul className='overflow-y-auto max-h-60 '>
                    <Select categoria="Opción 1" setSelected={setSelected} setIsOpen={setIsOpen} />
                    <Select categoria="Opción 2" setSelected={setSelected} setIsOpen={setIsOpen} />
                    <Select categoria="Opción 3" setSelected={setSelected} setIsOpen={setIsOpen} />
                    <Select categoria="Opción 4" setSelected={setSelected} setIsOpen={setIsOpen} />
                    <Select categoria="Opción 5" setSelected={setSelected} setIsOpen={setIsOpen} />
                    <Select categoria="Opción 6" setSelected={setSelected} setIsOpen={setIsOpen} />
                    <Select categoria="Opción 7" setSelected={setSelected} setIsOpen={setIsOpen} />
                    <Select categoria="Opción 8" setSelected={setSelected} setIsOpen={setIsOpen} />
                    {/* Agrega más opciones aquí si es necesario */}
                </ul>
            </div>
        </div>
    );
}

export default SelectForm;

