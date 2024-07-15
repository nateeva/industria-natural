import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                inter: 'Inter',
                ebGaramond: 'EB Garamond'
            },
            colors: {
                claro: '#F5F1E6',
                marron: {
                    50: '#9F7760',
                    100: '#89614A',
                    200: '#574D4B'
                },
                verde: {
                    50: '#839F98',
                    100: '#90A6A0',
                    200: '#627570'
                },
                gris: {
                    50: '#9C9C9C',
                    100: '#838282'
                }

            },
        },
    },

    plugins: [forms],
};
