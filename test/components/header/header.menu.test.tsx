import { render, screen } from '@testing-library/react'

import { HeaderMenu } from '~/components/header/header.menu'
import type { MenuItemWithSubItems } from '~/types/header'

vi.mock('@remix-run/react', () => ({
  NavLink: ({ to, children, ...props }: { to: string; children: React.ReactNode }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}))

describe('HeaderMenu', () => {
  const menuItemId = 'menu-item'

  const mockItems: MenuItemWithSubItems[] = [
    {
      title: 'Living Room',
      to: '/living-room',
      items: [
        { title: 'Sofas', to: '/sofas' },
        { title: 'Tables', to: '/tables' },
      ],
    },
    { title: 'Bedroom', to: '/bedroom', items: [] },
  ]

  it('should render menu items when provided', () => {
    render(<HeaderMenu items={mockItems} />)

    const menuItems = screen.getAllByTestId(menuItemId)
    expect(menuItems.length).toBe(mockItems.length)
  })

  it('should not render when items are empty', () => {
    render(<HeaderMenu items={[]} />)

    const menuItems = screen.queryByTestId(menuItemId)
    expect(menuItems).not.toBeInTheDocument()
  })

  it('should not render when items are undefined', () => {
    render(<HeaderMenu items={undefined} />)

    const menuItems = screen.queryByTestId(menuItemId)
    expect(menuItems).not.toBeInTheDocument()
  })
})
