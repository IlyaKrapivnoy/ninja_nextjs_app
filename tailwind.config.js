module.exports = {
    content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
    theme: {
        minWidth: {
            0: '0',
            '100px': '100px',
            '150px': '150px',
            '200px': '200px',
            '250px': '250px',
            '300px': '300px',
            full: '100%'
        },
        extend: {
            colors: {
                customIndianRed: '#e0595f',
                customSeaSalt: '#faf9f9'
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite'
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' }
                }
            }
        }
    },
    variants: {},
    plugins: []
};
