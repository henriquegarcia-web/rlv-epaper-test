import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#f1f1f1',
        foreground: '#ffffff',
        footer: '#F9FAFB',
        comtainer: '#E5E7EB',
        backdrop: '#191E29',
        'border-primary': '#E5E7EB',
        'color-primary': '#191e29',
        'color-secondary': '#3A424E',
        'color-white': '#ffffff',
        'color-legend': '#6B7280',
        'color-contrast': '#05C151',
        'active-primary': '#caffd6',
        'active-secondary': '#f3f4f6',
        'button-primary': '#05C151',
        'button-disabled': '#6B7280',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      spacing: {
        'admin-header': '72px',
        'admin-footer': '56px',
        'admin-sidemenu': '64px',
        'admin-sidemenu-open': '252px',
        'admin-sidemenu-open-mobile': '364px',
        'admin-filterdrawer-open': '390px',
        fit: 'fit-content'
      },
      height: {
        'admin-content': 'calc(100vh - 72px)',
        'drawer-content': 'calc(100% - 145px)'
      },
      width: {
        'admin-content': 'calc(100% - 64px)'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config
