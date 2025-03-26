import { Await, NavLink as RemixNavLink } from '@remix-run/react'
import { User, UserPlus } from 'lucide-react'
import { Suspense } from 'react'

import { Button } from '~/components/ui/button'
import { NavLink } from '~/components/ui/nav-link'
import { ROUTES } from '~/constants/routes'
import type { HeaderProps } from '~/types/header'

export function HeaderAccount({ isLoggedIn }: Readonly<Pick<HeaderProps, 'isLoggedIn'>>) {
  return (
    <Suspense fallback={<HeaderAccountSignInOrUp />}>
      <Await resolve={isLoggedIn} errorElement={<HeaderAccountSignInOrUp />}>
        {isLoggedIn => (isLoggedIn ? <HeaderAccountProfile /> : <HeaderAccountSignInOrUp />)}
      </Await>
    </Suspense>
  )
}

function HeaderAccountProfile() {
  return (
    <Button asChild variant='ghost' className='[&_svg]:text-secondary'>
      <RemixNavLink prefetch='intent' to={ROUTES.account.main} data-testid='header-profile-link'>
        <User />
        <div>Minha conta</div>
      </RemixNavLink>
    </Button>
  )
}

function HeaderAccountSignInOrUp() {
  return (
    <div className='flex items-center gap-2 font-display font-medium'>
      <UserPlus className='size-5 text-secondary' />
      <div className='whitespace-nowrap'>
        <NavLink prefetch='intent' to={ROUTES.account.signIn} data-testid='header-sign-in-link'>
          Entrar
        </NavLink>
        <span className='font-normal text-muted-foreground'> ou </span>
        <NavLink prefetch='intent' to={ROUTES.account.signUp} data-testid='header-sign-up-link'>
          cadastrar
        </NavLink>
      </div>
    </div>
  )
}
