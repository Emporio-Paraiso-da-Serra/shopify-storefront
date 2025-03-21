import { render, screen } from '@testing-library/react'

import { For } from '~/components/utils/for'

describe('For', () => {
  const mockList = ['Bed', 'Table', 'Chair']
  const mockContent = 'This text should not be rendered'
  const mockFallback = 'No items found'

  it('should render the list items', () => {
    render(<For list={mockList}>{item => <div key={item}>{item}</div>}</For>)

    const bed = screen.getByText('Bed')
    const table = screen.getByText('Table')
    const chair = screen.getByText('Chair')

    expect(bed).toBeInTheDocument()
    expect(table).toBeInTheDocument()
    expect(chair).toBeInTheDocument()
  })

  it('should render the `fallback` when the list is empty', () => {
    render(
      <For list={[]} fallback={mockFallback}>
        {() => mockContent}
      </For>,
    )

    const fallbackElement = screen.getByText(mockFallback)
    expect(fallbackElement).toBeInTheDocument()

    const emptyElement = screen.queryByText(mockContent)
    expect(emptyElement).not.toBeInTheDocument()
  })

  it('should render the `fallback` when the list is `undefined`', () => {
    render(
      <For list={undefined} fallback={mockFallback}>
        {() => mockContent}
      </For>,
    )

    const fallbackElement = screen.getByText(mockFallback)
    expect(fallbackElement).toBeInTheDocument()

    const emptyElement = screen.queryByText(mockContent)
    expect(emptyElement).not.toBeInTheDocument()
  })

  it('should not render anything if `fallback` is not provided and the list is empty', () => {
    const { container } = render(<For list={[]}>{() => mockContent}</For>)

    expect(container.firstChild).toBeNull()
  })

  it('should not render anything if `fallback` is not provided and the list is `undefined`', () => {
    const { container } = render(<For list={undefined}>{() => mockContent}</For>)

    expect(container.firstChild).toBeNull()
  })
})
