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
        background: '#f1f1f1',
        foreground: '#ffffff',
        'color-primary': '#191e29',
        'active-primary': '#caffd6',
        'active-secondary': '#f3f4f6'
      },
      spacing: {
        'admin-header': '72px',
        'admin-footer': '56px',
        'admin-sidemenu': '64px',
        'admin-sidemenu-open': '252px',
        'admin-sidemenu-open-mobile': '364px'
      },
      height: {
        'admin-content': 'calc(100vh - 72px)'
      },
      width: {
        'admin-content': 'calc(100% - 64px)'
      }
    }
  },
  plugins: []
} satisfies Config
