import React from 'react';
import SelectContainer from './SelectContainer';

const Filter = () => {
    return (
        <div className='h-full text-marron-200 font-inter bg-claro lg:pr-0'>
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
