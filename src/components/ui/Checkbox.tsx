'use client'

import { forwardRef, useEffect, useRef, useCallback } from 'react'
import { Check } from 'lucide-react'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import { cn } from '@/lib/utils'

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  indeterminate?: boolean
}

const Checkbox = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, indeterminate, ...props }, ref) => {
  const innerRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (innerRef.current) {
      // @ts-ignore - Adicionando propriedade indeterminate
      innerRef.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  const handleRef = useCallback(
    (node: any) => {
      innerRef.current = node

      if (typeof ref === 'function') {
        ref(node)
      } else if (ref) {
        ;(ref as React.MutableRefObject<any>).current = node
      }
    },
    [ref]
  )

  return (
    <CheckboxPrimitive.Root
      ref={handleRef}
      className={cn(
        'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn('flex items-center justify-center text-current')}
      >
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})

Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
