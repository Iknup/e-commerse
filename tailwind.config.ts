import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#f7f7f7',
      black: '#111111',
    },
    extend: {
      fontFamily: {
        gmarket: ['GmarketSansMedium', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'color-box': '0 6px 5px rgba(0, 0, 0, 0.25)',
        'modal-box': '0 7px 5px rgba(0, 0, 0, 0.20)',
      },
      colors: {
        'filter-button': '#f2f2f2',
        'color-greyish': '#bfbfbf',
      },
    },
  },
  plugins: [],
};
export default config;
