import { cva, type VariantProps } from 'class-variance-authority'
import type { LucideIcon } from 'lucide-react'
import { forwardRef, type InputHTMLAttributes } from 'react'

import { cn } from '~/utils'

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants> & {
    icon?: LucideIcon
  }

const inputVariants = cva(
  'focus h-9 w-full rounded-md border bg-transparent px-2 pb-[1px] text-sm leading-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-border font-sans text-foreground placeholder:text-muted-foreground',
        error: 'border-error text-error placeholder:text-error-light',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)

const iconColors = {
  default: 'text-secondary',
  error: 'text-error',
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', variant, className, icon, ...props }, ref) => {
    const Icon = icon

    if (Icon) {
      return (
        <div className='focus relative flex w-full items-center [&>svg]:size-5'>
          <input ref={ref} type={type} className={cn(inputVariants({ variant, className }), 'pl-8')} {...props} />
          <Icon
            strokeWidth={1.5}
            className={cn('pointer-events-none absolute left-2', iconColors[variant ?? 'default'])}
            data-testid='input-icon'
          />
        </div>
      )
    }

    return <input ref={ref} type={type} className={cn(inputVariants({ variant, className }))} {...props} />
  },
)
Input.displayName = 'Input'
