import { NavLink } from '@remix-run/react'
import { Search } from 'lucide-react'

import { Input } from '~/components/ui/input'
import type { HeaderProps } from '~/types/header'

import { HeaderMenu } from './header.menu'

export function Header({ header }: Readonly<HeaderProps>) {
  const { shop, menu } = header

  return (
    <header>
      <div className='container flex items-center gap-16 py-6' data-testid='header'>
        <NavLink prefetch='intent' to='/' className='shrink-0'>
          <img src='/layout/logo.svg' alt={shop.name} className='h-auto w-40 transition-opacity hover:opacity-80' />
        </NavLink>

        <Input icon={Search} placeholder='Qual móvel você procura?' data-test-id='header-search-input' />
      </div>

      <HeaderMenu menu={menu} />
    </header>
  )
}
