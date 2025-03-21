import { render, screen } from '@testing-library/react'

import { Show } from '~/components/utils/show'

describe('Show', () => {
  const mockChildren = 'Children content'
  const mockFallback = 'Fallback content'

  it('should render children when `when` is `true`', () => {
    render(
      <Show when={true} fallback={mockFallback}>
        {mockChildren}
      </Show>,
    )

    const childrenContent = screen.getByText(mockChildren)
    expect(childrenContent).toBeInTheDocument()
  })

  it('should render `fallback` when `when` is `false`', () => {
    render(
      <Show when={false} fallback={mockFallback}>
        {mockChildren}
      </Show>,
    )

    const fallbackContent = screen.getByText(mockFallback)
    expect(fallbackContent).toBeInTheDocument()
  })

  it('should render `fallback` when `when` is `undefined`', () => {
    render(
      <Show when={undefined} fallback={mockFallback}>
        {mockChildren}
      </Show>,
    )

    const fallbackContent = screen.getByText(mockFallback)
    expect(fallbackContent).toBeInTheDocument()
  })

  it('should render `fallback` when `when` is `null`', () => {
    render(
      <Show when={null} fallback={mockFallback}>
        {mockChildren}
      </Show>,
    )

    const fallbackContent = screen.getByText(mockFallback)
    expect(fallbackContent).toBeInTheDocument()
  })

  it('should render nothing when `when` is `false` and no `fallback` is provided', () => {
    const { container } = render(<Show when={false}>{mockChildren}</Show>)

    expect(container.firstChild).toBeNull()
  })

  it('should render nothing when `when` is `undefined` and no `fallback` is provided', () => {
    const { container } = render(<Show when={undefined}>{mockChildren}</Show>)

    expect(container.firstChild).toBeNull()
  })

  it('should render nothing when `when` is `null` and no `fallback` is provided', () => {
    const { container } = render(<Show when={null}>{mockChildren}</Show>)

    expect(container.firstChild).toBeNull()
  })
})
