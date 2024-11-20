import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', icon, ...props }, ref) => {
    return (
      <div className="relative flex items-center h-10 w-full">
        <input
          type={type}
          className={cn(
            'flex h-full w-full rounded-md border border-input bg-foreground px-[14px] py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <span className="absolute right-[10px] [&_svg]:size-[16px] [&_svg]:shrink-0 [&_svg]:text-color-secondary">
            {icon}
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
