import { render, screen } from '@testing-library/react'

import { PageLayout } from '~/components/layout/page.layout'
import { STORE_BASE_URL } from '~/constants/store'
import type { HeaderType } from '~/types/header'

describe('Header', () => {
  const headerId = 'header'

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
          items: [],
        },
      ],
    },
  }

  it('should render a page with header', () => {
    render(
      <PageLayout header={mockHeader}>
        <div>Children</div>
      </PageLayout>,
    )

    const header = screen.getByTestId(headerId)
    expect(header).toBeInTheDocument()
  })

  it('should render a page with children content', () => {
    const childrenId = 'children'
    render(
      <PageLayout header={mockHeader}>
        <div data-testid={childrenId}>Children</div>
      </PageLayout>,
    )

    const children = screen.getByTestId(childrenId)
    expect(children).toBeInTheDocument()
  })
})
