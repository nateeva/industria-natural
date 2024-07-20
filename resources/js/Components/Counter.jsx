import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className='flex items-center text-[18px] border-2 border-verde-100 font-inter text-verde-100'>
            <button className='w-10 h-10 hover:bg-[#DEDCD6]' onClick={decrement}>-</button>
            <div className='flex items-center justify-center w-12 h-10 '>{count}</div>
            <button className='w-10 h-10 hover:bg-[#DEDCD6]' onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
};

export default Counter;
