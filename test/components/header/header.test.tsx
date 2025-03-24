import { render, screen } from '@testing-library/react'
import { mockNavLink } from 'test/mocks.functions'

import { Header } from '~/components/header'
import { STORE_BASE_URL } from '~/constants/store'
import type { HeaderType } from '~/types/header'

beforeAll(() => {
  mockNavLink()
})

describe('Header', () => {
  const headerId = 'header'
  const menuId = 'header-menu'

  const mockHeader: HeaderType = {
    shop: {
      id: 'gid://shopify/Shop/mock-store',
      name: 'Store',
      description: 'A mock store for testing',
      primaryDomain: { url: STORE_BASE_URL },
      brand: { logo: { image: { url: `${STORE_BASE_URL}/layout/logo.svg` } } },
    },
    menu: {
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
    },
  }

  const mockHeaderWithoutMenu: HeaderType = {
    shop: mockHeader.shop,
  }

  it('should render with menu when provided', () => {
    render(<Header header={mockHeader} />)

    const header = screen.getByTestId(headerId)
    expect(header).toBeInTheDocument()

    const menu = screen.getByTestId(menuId)
    expect(menu).toBeInTheDocument()
  })

  it('should not render the menu when not provided', () => {
    render(<Header header={mockHeaderWithoutMenu} />)

    const header = screen.getByTestId(headerId)
    expect(header).toBeInTheDocument()

    const menu = screen.queryByTestId(menuId)
    expect(menu).not.toBeInTheDocument()
  })
})
