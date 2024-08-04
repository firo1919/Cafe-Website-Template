/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "orange-light": "#fff6f6",
                "orange-medium-light": "#ffe1e1",
                orange: "#FF2626",
                white: "#ffffff",
            },
        },
    },
    plugins: [],
};
