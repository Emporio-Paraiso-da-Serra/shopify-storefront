import { createRemixStub } from '@remix-run/testing'
import { act, render, screen } from '@testing-library/react'
import { isLoggedIn } from 'test/mocks/mock.header'

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

  it('should render a page with header', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: () => (
          <PageLayout header={mockHeader} isLoggedIn={isLoggedIn(true)}>
            <div>Children</div>
          </PageLayout>
        ),
      },
    ])
    await act(async () => render(<RemixStub />))

    const header = screen.getByTestId(headerId)
    expect(header).toBeInTheDocument()
  })

  it('should render a page with children content', async () => {
    const childrenId = 'children'

    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: () => (
          <PageLayout header={mockHeader} isLoggedIn={isLoggedIn(true)}>
            <div data-testid={childrenId}>Children</div>
          </PageLayout>
        ),
      },
    ])
    await act(async () => render(<RemixStub />))

    const children = screen.getByTestId(childrenId)
    expect(children).toBeInTheDocument()
  })
})
