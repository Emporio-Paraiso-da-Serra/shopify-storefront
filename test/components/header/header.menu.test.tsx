import { render, screen } from '@testing-library/react'
import type { HeaderQuery } from 'storefrontapi.generated'

import { HeaderMenu } from '~/components/header/header.menu'

describe('HeaderMenu', () => {
  const menuId = 'header-menu'
  const menuItemId = 'header-menu-item'

  const mockMenu: HeaderQuery['menu'] = {
    id: 'mock-menu',
    items: [
      {
        id: 'item',
        title: 'Item title',
        url: 'http://store.com/item',
        items: [
          {
            id: 'sub-item',
            title: 'Sub item title',
            url: 'http://store.com/item/sub-item',
          },
        ],
      },
    ],
  }

  const mockMenuWithoutItems: HeaderQuery['menu'] = {
    id: 'mock-menu',
    items: [],
  }

  it('should render menu items when provided', () => {
    render(<HeaderMenu menu={mockMenu} />)

    const menu = screen.queryByTestId(menuId)
    expect(menu).toBeInTheDocument()

    const menuItems = screen.getAllByTestId(menuItemId)
    expect(menuItems.length).toBe(mockMenu.items.length)
    expect(menuItems[0]).toHaveTextContent(mockMenu.items[0].title)
  })

  it('should not render when items are empty', () => {
    render(<HeaderMenu menu={mockMenuWithoutItems} />)

    const menu = screen.queryByTestId(menuId)
    expect(menu).not.toBeInTheDocument()
  })

  it('should not render when menu is undefined', () => {
    render(<HeaderMenu menu={undefined} />)

    const menu = screen.queryByTestId(menuId)
    expect(menu).not.toBeInTheDocument()
  })
})
