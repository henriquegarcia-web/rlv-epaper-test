import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        secondary: '#9333EA',
        accent: '#F59E0B',
        muted: '#6B7280',
        background: '#F3F4F6'
      }
      // spacing: {
      //   '72': '18rem',
      //   '84': '21rem',
      //   '96': '24rem',
      //   '108': '27rem'
      // },
      // fontFamily: {
      //   sans: ['Inter', 'sans-serif'],
      //   serif: ['Merriweather', 'serif']
      // },
      // borderRadius: {
      //   '4xl': '2rem'
      // },
      // boxShadow: {
      //   'outline-primary': '0 0 0 3px rgba(29, 78, 216, 0.5)'
      // },
      // zIndex: {
      //   '-10': '-10'
      // },
      // transitionProperty: {
      //   height: 'height',
      //   spacing: 'margin, padding'
      // }
    }
  },
  plugins: []
} satisfies Config
