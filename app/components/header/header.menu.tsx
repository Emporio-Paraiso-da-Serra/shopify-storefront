import { headerMenuItemAdapter } from '~/adapters/header.menu.item.adapter'
import { For } from '~/components/utils/for'
import type { HeaderMenuType } from '~/types/header'

import { HeaderMenuItem } from './header.menu.item'

interface HeaderMenuProps {
  menu: HeaderMenuType
}

export function HeaderMenu({ menu }: Readonly<HeaderMenuProps>) {
  const sourceItems = menu?.items
  const hasItems = sourceItems && sourceItems.length > 0

  if (!hasItems) {
    return null
  }

  const menuItems = sourceItems.map(headerMenuItemAdapter)

  return (
    <div className='bg-primary' data-testid='header-menu'>
      <nav className='container flex gap-4'>
        <For list={menuItems} keyExtractor={item => item.title}>
          {item => <HeaderMenuItem {...item} />}
        </For>
      </nav>
    </div>
  )
}
