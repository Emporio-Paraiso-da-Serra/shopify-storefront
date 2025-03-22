import { NavLink } from '@remix-run/react'
import { ChevronDown, ChevronRight } from 'lucide-react'

import { For } from '~/components/utils/for'
import { Show } from '~/components/utils/show'
import type { MenuItemWithSubItems } from '~/types/header'

export function HeaderMenuItem({ to, title, items }: Readonly<MenuItemWithSubItems>) {
  const hasItems = items && items.length > 0

  return (
    <div className='group/menu relative'>
      <NavLink
        to={to}
        prefetch='intent'
        data-testid='menu-item'
        className='flex items-center gap-1 py-3 font-display font-medium text-primary-foreground'
      >
        {title}
        <Show when={hasItems}>
          <ChevronDown className='size-4 text-secondary' data-testid='menu-item-dropdown-icon' />
        </Show>
      </NavLink>

      <Show when={hasItems}>
        <div className='invisible absolute left-0 top-12 z-50 min-w-36 space-y-1 rounded-md rounded-ss-none bg-background px-3 py-4 opacity-0 shadow-md transition-all group-hover/menu:visible group-hover/menu:top-10 group-hover/menu:opacity-100'>
          <For list={items} keyExtractor={item => item.title}>
            {item => (
              <NavLink
                to={item.to}
                key={item.title}
                prefetch='intent'
                data-testid='menu-sub-item'
                className='flex items-center gap-1 font-display font-medium text-foreground transition-colors hover:text-primary'
              >
                <ChevronRight className='size-3 shrink-0 text-secondary' />
                {item.title}
              </NavLink>
            )}
          </For>
        </div>
      </Show>
    </div>
  )
}
