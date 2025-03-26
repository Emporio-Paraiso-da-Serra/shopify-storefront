import { render, screen } from '@testing-library/react'

import { Button } from '~/components/ui/button'

describe('Button', () => {
  it('should render the default button', () => {
    const buttonText = 'Default Button'
    render(<Button>{buttonText}</Button>)

    const buttonElement = screen.getByRole('button', { name: buttonText })

    expect(buttonElement).toHaveClass('bg-primary')
    expect(buttonElement).toHaveClass('text-primary-foreground')
    expect(buttonElement).toHaveClass('h-10')
    expect(buttonElement).toHaveClass('px-4')
  })

  it('should render the muted variant', () => {
    const buttonText = 'Muted Button'
    render(<Button variant='muted'>{buttonText}</Button>)

    const buttonElement = screen.getByRole('button', { name: buttonText })

    expect(buttonElement).toHaveClass('bg-muted')
    expect(buttonElement).toHaveClass('text-muted-foreground')
    expect(buttonElement).toHaveClass('hover:bg-accent')
    expect(buttonElement).toHaveClass('hover:text-accent-foreground')
  })

  it('should render the outline variant', () => {
    const buttonText = 'Outline Button'
    render(<Button variant='outline'>{buttonText}</Button>)

    const buttonElement = screen.getByRole('button', { name: buttonText })

    expect(buttonElement).toHaveClass('border')
    expect(buttonElement).toHaveClass('border-border')
    expect(buttonElement).toHaveClass('bg-transparent')
    expect(buttonElement).toHaveClass('text-foreground')
  })

  it('should render the ghost variant', () => {
    const buttonText = 'Ghost Button'
    render(<Button variant='ghost'>{buttonText}</Button>)

    const buttonElement = screen.getByRole('button', { name: buttonText })

    expect(buttonElement).toHaveClass('bg-transparent')
    expect(buttonElement).toHaveClass('text-foreground')
    expect(buttonElement).toHaveClass('hover:bg-accent')
    expect(buttonElement).toHaveClass('hover:text-accent-foreground')
  })

  it('should render the small size', () => {
    const buttonText = 'Small Button'
    render(<Button size='sm'>{buttonText}</Button>)

    const buttonElement = screen.getByRole('button', { name: buttonText })

    expect(buttonElement).toHaveClass('h-8')
    expect(buttonElement).toHaveClass('px-3')
    expect(buttonElement).toHaveClass('text-sm')
    expect(buttonElement).toHaveClass('rounded')
  })

  it('should render the icon size', () => {
    const buttonText = 'Icon Button'
    render(<Button size='icon'>{buttonText}</Button>)

    const buttonElement = screen.getByRole('button', { name: buttonText })

    expect(buttonElement).toHaveClass('size-10')
  })

  it('should render the small icon size', () => {
    const buttonText = 'Small Icon Button'
    render(<Button size='icon-sm'>{buttonText}</Button>)

    const buttonElement = screen.getByRole('button', { name: buttonText })

    expect(buttonElement).toHaveClass('size-8')
  })

  it('should render as a child element when asChild is true', () => {
    const buttonText = 'Child Button'
    render(
      <Button asChild>
        <a href='/'>{buttonText}</a>
      </Button>,
    )

    const linkElement = screen.getByRole('link', { name: buttonText })

    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveClass('bg-primary')
    expect(linkElement).toHaveClass('text-primary-foreground')
  })
})
