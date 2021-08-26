module.exports = {
    purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/line-clamp')
    ],
    theme: {
        colors: {
            primary: '#CDF7F6',
            secondary: '#1A5E63',
            third: '#495057'
        }
    }
}