import { NavLink as RemixNavLink, type NavLinkProps } from '@remix-run/react'

import { cn } from '~/utils'

export function NavLink({ className, ...props }: NavLinkProps) {
  return (
    <RemixNavLink
      className={cn(
        'focus rounded text-accent-foreground underline underline-offset-2 transition-colors hover:text-primary',
        className,
      )}
      {...props}
    />
  )
}
