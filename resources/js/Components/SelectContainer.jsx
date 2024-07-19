import React, { useState } from 'react';
import Select from './Select';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SelectContainer = ({title}) => {
    const [selected, setSelected] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className='lg:w-64'>
            <div
                className='flex items-center justify-between w-full p-2 font-semibold transition-all duration-200 border-b-2 cursor-pointer border-marron-200'
                onClick={toggleDropdown}
            >
                {selected ? selected : title}
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <ul className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
                <Select categoria="Opción 1" setSelected={setSelected} setIsOpen={setIsOpen} />
                <Select categoria="Opción 2" setSelected={setSelected} setIsOpen={setIsOpen} />
                <Select categoria="Opción 3" setSelected={setSelected} setIsOpen={setIsOpen} />
            </ul>
        </div>
    );
}

export default SelectContainer;
