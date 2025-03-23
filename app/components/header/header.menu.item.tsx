import { NavLink } from '@remix-run/react'
import { ChevronDown, ChevronRight } from 'lucide-react'

import { For } from '~/components/utils/for'
import { Show } from '~/components/utils/show'
import type { HeaderMenuItemType } from '~/types/header'

export function HeaderMenuItem({ title, path, items }: Readonly<HeaderMenuItemType>) {
  const hasItems = items.length > 0

  return (
    <div className='group/menu relative'>
      <NavLink
        to={path}
        prefetch='intent'
        data-testid='header-menu-item'
        className='flex items-center gap-1 py-3 font-display font-medium text-primary-foreground'
      >
        {title}
        <Show when={hasItems}>
          <ChevronDown className='size-4 text-secondary' data-testid='header-menu-dropdown-icon' />
        </Show>
      </NavLink>

      <Show when={hasItems}>
        <div className='invisible absolute left-0 top-12 z-50 space-y-1 rounded-md rounded-ss-none bg-background py-5 pl-4 pr-8 opacity-0 shadow-md transition-all group-hover/menu:visible group-hover/menu:top-10 group-hover/menu:opacity-100'>
          <For list={items} keyExtractor={item => item.title}>
            {item => (
              <NavLink
                to={item.path}
                key={item.title}
                prefetch='intent'
                data-testid='header-menu-sub-item'
                className='flex items-center gap-1 whitespace-nowrap font-display font-medium text-foreground transition-colors hover:text-primary'
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
