import { headerMenuItemAdapter } from '~/adapters/header.menu.item.adapter'
import { For } from '~/components/utils/for'
import type { HeaderProps } from '~/types/header'

import { HeaderMenuItem } from './header.menu.item'

export function HeaderMenu({ menu }: Readonly<Pick<HeaderProps['header'], 'menu'>>) {
  const sourceItems = menu?.items
  const hasItems = sourceItems && sourceItems.length > 0

  if (!hasItems) {
    return null
  }

  const menuItems = sourceItems.map(headerMenuItemAdapter)

  return (
    <div className='bg-primary' data-testid='header-menu'>
      <nav className='container flex gap-4' role='navigation'>
        <For list={menuItems} keyExtractor={item => item.title}>
          {item => <HeaderMenuItem {...item} />}
        </For>
      </nav>
    </div>
  )
}
