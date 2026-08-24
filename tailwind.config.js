/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./guides/*.html",
        "./assets/*.js"
    ],
    theme: {
        extend: {
            colors: {
                navy: { 900: '#150B33', 800: '#241454', 700: '#3A1E82', 600: '#4828B0' },
                gold: { 700: '#8A6500', 600: '#C08F06', 500: '#E0A808', 400: '#EDC04D', 300: '#F5D889' },
                brandGreen: { 600: '#007A46', 500: '#00D078', 400: '#33DB94', 100: '#D9FBEB' },
                slateLight: '#F8FAFC'
            },
            fontFamily: { cairo: ['Cairo', 'sans-serif'] },
            animation: {
                'marquee': 'marquee 25s linear infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(100%)' },
                }
            }
        }
    },
    plugins: []
}
