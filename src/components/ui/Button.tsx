import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-[8px] whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 transition-colors transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',

        primary: 'bg-button-primary text-color-white hover:opacity-90',
        outline:
          'border border-border-primary bg-foreground hover:bg-accent hover:text-accent-foreground [&_svg]:size-[18px] font-bold text-[14px]',
        icon: 'bg-foreground hover:bg-accent hover:text-accent-foreground [&_svg]:size-[22px]',
        menu: 'justify-start pl-[14px] text-[14px] bg-foreground text-color-secondary hover:bg-accent [&_svg]:size-[16px]',
        circle:
          'bg-button-primary hover:opacity-85 [&_svg]:text-color-white [&_svg]:size-[26px]'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        primary: 'h-[40px] px-[14px]',
        outline: 'h-[40px] px-[14px]',
        icon: 'h-[40px] w-[40px]',
        menu: 'h-[40px] w-full',
        circle: 'h-[56px] w-[56px] rounded-[100px]'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  active?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, active, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    const { disabled } = props
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          {
            'bg-accent hover:bg-accent hover:text-accent-foreground':
              active && variant === 'icon',
            'bg-active-primary text-color-secondary hover:bg-active-primary hover:text-accent-foreground':
              active && variant === 'menu'
          },
          {
            'bg-button-disabled text-color-white pointer-events-none cursor-default':
              disabled
          }
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
