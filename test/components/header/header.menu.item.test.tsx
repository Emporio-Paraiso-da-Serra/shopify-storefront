import { createRemixStub } from '@remix-run/testing'
import { act, render, screen } from '@testing-library/react'

import { HeaderMenuItem } from '~/components/header/header.menu.item'
import type { HeaderMenuItemType } from '~/types/header'

describe('HeaderMenuItem', () => {
  const menuItemId = 'header-menu-item'
  const dropdownIconId = 'header-menu-dropdown-icon'
  const subItemsId = 'header-menu-sub-item'

  const mockItem: HeaderMenuItemType = {
    id: 'bedroom',
    title: 'Bedroom',
    path: '/bedroom',
    items: [],
  }

  const mockItemWithSubItems: HeaderMenuItemType = {
    id: 'living-room',
    title: 'Living Room',
    path: '/living-room',
    items: [
      { id: 'sofas', title: 'Sofas', path: '/sofas' },
      { id: 'tables', title: 'Tables', path: '/tables' },
    ],
  }

  it('should render the menu item title and link', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: () => <HeaderMenuItem {...mockItem} />,
      },
    ])
    await act(async () => render(<RemixStub />))

    const itemElement = screen.getByTestId(menuItemId)
    expect(itemElement).toHaveTextContent(mockItem.title)
    expect(itemElement).toHaveAttribute('href', mockItem.path)
  })

  it('should render a dropdown icon when the item has sub-items', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: () => <HeaderMenuItem {...mockItemWithSubItems} />,
      },
    ])
    await act(async () => render(<RemixStub />))

    const dropdownIcon = screen.getByTestId(dropdownIconId)
    expect(dropdownIcon).toBeInTheDocument()
  })

  it('should not render a dropdown icon when the item has no sub-items', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: () => <HeaderMenuItem {...mockItem} />,
      },
    ])
    await act(async () => render(<RemixStub />))

    const dropdownIcon = screen.queryByTestId(dropdownIconId)
    expect(dropdownIcon).not.toBeInTheDocument()
  })

  it('should render sub-items when the item has them', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: () => <HeaderMenuItem {...mockItemWithSubItems} />,
      },
    ])
    await act(async () => render(<RemixStub />))

    const subItems = screen.getAllByTestId(subItemsId)
    expect(subItems.length).toBe(mockItemWithSubItems.items.length)
  })

  it('should not render sub-items when the item has none', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: () => <HeaderMenuItem {...mockItem} />,
      },
    ])
    await act(async () => render(<RemixStub />))

    const subItems = screen.queryByTestId(subItemsId)
    expect(subItems).not.toBeInTheDocument()
  })
})
