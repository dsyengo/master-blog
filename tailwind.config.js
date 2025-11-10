/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx}"],
    darkMode: 'class',
    theme: {
        colors: {
            primary: {
                50: '#e6ebff',
                500: '#5064c8',
                600: '#3e4fa8',
                700: '#2e3b85',
            },
            secondary: {
                50: '#e6f7f8',
                400: '#33a6b1',
                500: '#2a848e',
            },
            neutral: {
                50: '#f9fafb',
                100: '#f3f4f6',
                200: '#e5e7eb',
                300: '#d1d5db',
                400: '#9ca3af',
                500: '#6b7280',
                600: '#4b5563',
                700: '#374151',
                800: '#1f2937',
                900: '#111827',
            },
            white: '#ffffff',
            black: '#000000',
            transparent: 'transparent',
        },
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['Source Serif Pro', 'Georgia', 'serif'],
            },
        },
    },
    plugins: [],
}