/** @type {import('tailwindcss').Config}*/

module.exports = {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
        "./client/index.html",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#7461ab",
            },
        },
    },
    plugins: [],
};