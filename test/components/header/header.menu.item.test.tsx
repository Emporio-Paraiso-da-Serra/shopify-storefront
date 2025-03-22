import { render, screen } from '@testing-library/react'

import { HeaderMenuItem } from '~/components/header/header.menu.item'
import type { MenuItemWithSubItems } from '~/types/header'

vi.mock('@remix-run/react', () => ({
  NavLink: ({ to, children, ...props }: { to: string; children: React.ReactNode }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}))

describe('HeaderMenuItem', () => {
  const dropdownIconId = 'menu-item-dropdown-icon'
  const subItemsId = 'menu-sub-item'

  const mockItemWithSubItems: MenuItemWithSubItems = {
    title: 'Living Room',
    to: '/living-room',
    items: [
      { title: 'Sofas', to: '/sofas' },
      { title: 'Tables', to: '/tables' },
    ],
  }

  const mockItemWithoutSubItems: MenuItemWithSubItems = {
    title: 'Bedroom',
    to: '/bedroom',
    items: [],
  }

  it('should render the menu item title and link', () => {
    render(<HeaderMenuItem {...mockItemWithoutSubItems} />)

    const linkElement = screen.getByRole('link', { name: mockItemWithoutSubItems.title })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', mockItemWithoutSubItems.to)
  })

  it('should render a dropdown icon when the item has sub-items', () => {
    render(<HeaderMenuItem {...mockItemWithSubItems} />)

    const dropdownIcon = screen.getByTestId(dropdownIconId)
    expect(dropdownIcon).toBeInTheDocument()
  })

  it('should not render a dropdown icon when the item has no sub-items', () => {
    render(<HeaderMenuItem {...mockItemWithoutSubItems} />)

    const dropdownIcon = screen.queryByTestId(dropdownIconId)
    expect(dropdownIcon).not.toBeInTheDocument()
  })

  it('should render sub-items when the item has them', () => {
    render(<HeaderMenuItem {...mockItemWithSubItems} />)

    const subItems = screen.getAllByTestId(subItemsId)
    expect(subItems.length).toBe(mockItemWithSubItems.items.length)
  })

  it('should not render sub-items when the item has none', () => {
    render(<HeaderMenuItem {...mockItemWithoutSubItems} />)

    const subItems = screen.queryByTestId(subItemsId)
    expect(subItems).not.toBeInTheDocument()
  })
})
