import * as LabelPrimitive from '@radix-ui/react-label'
import { forwardRef } from 'react'

import { cn } from '~/utils'

export const Label = forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      'text-sm leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
      className,
    )}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName
