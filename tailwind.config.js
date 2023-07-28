module.exports = {
    mode: 'jit',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            'primary': '#4CAF50',
            'background': '#F1F5F9',
            'gray-50': '#f9fafb',
            'gray-100': '#f3f4f6',
            'gray-200': '#e5e7eb',
            'gray-300': '#d1d5db',
            'gray-400': '#9ca3af',
            'gray-500': '#6b7280',
            'gray-600': '#4b5563',
            'gray-700': '#374151',
            'gray-900': '#212121',

            'green-100': '#C8E6C9',
            'green-200': '#A5D6A7',
            'green-700': '#388E3C',
            'green-800': '#2E7D32',
            'red-500': '#ef4444',
            'blue-500': '#3b82f6',
            'white': '#FFFFFF',
            'black': '#000000',
        }
    },
    plugins: [],
}
