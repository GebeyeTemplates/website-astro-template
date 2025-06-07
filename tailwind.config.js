/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // Example: Indigo
        secondary: '#6EE7B7', // Example: Emerald
        accent: '#FCD34D', // Example: Amber
        // Add success, warning, error colors
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example: Use Inter font (add via <link> in HTML)
        display: ['Montserrat', 'sans-serif'], // Example: for headings
      },
      spacing: {
        '8pt': '0.5rem', // Example for an 8pt grid system
        '16pt': '1rem',
        // ... more granular spacing
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        'elevated': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};