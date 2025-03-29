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
                secondary: "a18cd1",
                background: "#f5f3f7",
                textPrimary: "#2d2d2d",
                textSecondary: "#6b7280",
                danger: "#e3342f",
            },
        },
    },
    plugins: [],
};