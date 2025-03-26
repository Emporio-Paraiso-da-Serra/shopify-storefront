import { createRemixStub } from '@remix-run/testing'
import { render, screen } from '@testing-library/react'

import { NavLink } from '~/components/ui/nav-link'

describe('NavLink', () => {
  it('should render with default style', () => {
    const content = 'Test content'
    const href = '/test'

    const RemixStub = createRemixStub([{ path: '/', Component: () => <NavLink to={href}>{content}</NavLink> }])
    render(<RemixStub />)

    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveTextContent(content)
    expect(linkElement).toHaveAttribute('href', href)
    expect(linkElement).toHaveClass('underline')
    expect(linkElement).toHaveClass('text-accent-foreground')
    expect(linkElement).toHaveClass('hover:text-primary')
  })

  it('should override a tailwind class when provided', () => {
    const content = 'Test content'
    const href = '/test'
    const classToOverride = 'text-primary'

    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: () => (
          <NavLink to={href} className={classToOverride}>
            {content}
          </NavLink>
        ),
      },
    ])
    render(<RemixStub />)

    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveClass(classToOverride)
  })
})
