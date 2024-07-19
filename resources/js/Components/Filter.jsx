import React from 'react';
import SelectContainer from './SelectContainer';

const Filter = () => {
    return (
        <div className='h-full px-6 pt-24 text-marron-200 font-inter bg-claro md:px-16 lg:px-6'>
            <h2 className='font-bold text-[18px] mb-4'>Filtrar</h2>
            <div className='space-y-6'>
                <SelectContainer title = "Categoria" />
                <SelectContainer title="Precio" />
                <SelectContainer title="Otro" />
            </div>
        </div>
    );
};

export default Filter;
