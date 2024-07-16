import React, { useState, useEffect } from 'react';

const TitlePrimary = ({ words1, words2, className, dynamic }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        if (dynamic) {
            const interval = setInterval(() => {
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words1.length);
            }, 2000); // Cambia cada 2 segundos

            return () => clearInterval(interval);
        }
    }, [dynamic, words1.length]);

    return (
        <div className={`font-ebGaramond text-marron-200 ${className}`}>
            <p className='text-5xl font-medium'>{words1[dynamic ? currentWordIndex : 0]}</p>
            <p className='ml-6 text-6xl italic font-bold leading-8'>{words2[dynamic ? currentWordIndex : 0]}</p>
        </div>
    );
};

export default TitlePrimary;
