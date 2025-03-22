import { For } from '~/components/utils/for'
import { Show } from '~/components/utils/show'
import type { MenuItemWithSubItems } from '~/types/header'

import { HeaderMenuItem } from './header.menu.item'

interface HeaderMenuProps {
  items?: MenuItemWithSubItems[]
}

export function HeaderMenu({ items }: Readonly<HeaderMenuProps>) {
  const hasItems = items && items.length > 0

  return (
    <Show when={hasItems}>
      <div className='bg-primary'>
        <nav className='container flex gap-4'>
          <For list={items} keyExtractor={item => item.title}>
            {item => <HeaderMenuItem {...item} />}
          </For>
        </nav>
      </div>
    </Show>
  )
}
