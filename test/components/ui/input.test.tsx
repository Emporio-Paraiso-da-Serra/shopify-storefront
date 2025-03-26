import { render, screen } from '@testing-library/react'
import { AlertCircle } from 'lucide-react'

import { Input } from '~/components/ui/input'

describe('Input', () => {
  it('should render the default input', () => {
    const placeholderText = 'Default input'
    render(<Input placeholder={placeholderText} />)

    const inputElement = screen.getByPlaceholderText(placeholderText)

    expect(inputElement).toHaveClass('border-border')
    expect(inputElement).toHaveClass('text-foreground')
    expect(inputElement).toHaveClass('placeholder:text-muted-foreground')
    expect(inputElement).toHaveClass('h-10')
    expect(inputElement).toHaveClass('w-full')
  })

  it('should render the error variant', () => {
    const placeholderText = 'Error input'
    render(<Input variant='error' placeholder={placeholderText} />)

    const inputElement = screen.getByPlaceholderText(placeholderText)

    expect(inputElement).toHaveClass('border-error')
    expect(inputElement).toHaveClass('text-error')
    expect(inputElement).toHaveClass('placeholder:text-error-light')
  })

  it('should render with an icon', () => {
    const placeholderText = 'Input with icon'
    render(<Input icon={AlertCircle} placeholder={placeholderText} />)

    const inputElement = screen.getByPlaceholderText(placeholderText)
    const iconElement = screen.getByTestId('input-icon')

    expect(inputElement).toHaveClass('pl-10')

    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toHaveClass('text-secondary')
  })

  it('should render the error variant with an icon', () => {
    const placeholderText = 'Error input with icon'
    render(<Input variant='error' icon={AlertCircle} placeholder={placeholderText} />)

    const inputElement = screen.getByPlaceholderText(placeholderText)
    const iconElement = screen.getByTestId('input-icon')

    expect(inputElement).toHaveClass('border-error')
    expect(inputElement).toHaveClass('text-error')
    expect(inputElement).toHaveClass('placeholder:text-error-light')

    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toHaveClass('text-error')
  })

  it('should render without an icon', () => {
    const placeholderText = 'Input without icon'
    render(<Input placeholder={placeholderText} />)

    const inputElement = screen.getByPlaceholderText(placeholderText)

    expect(inputElement).not.toHaveClass('pl-10')

    const iconElement = screen.queryByRole('img', { hidden: true })
    expect(iconElement).not.toBeInTheDocument()
  })

  it('should be disabled', () => {
    const placeholderText = 'Disabled input'
    render(<Input disabled placeholder={placeholderText} />)

    const inputElement = screen.getByPlaceholderText(placeholderText)

    expect(inputElement).toBeDisabled()
    expect(inputElement).toHaveClass('disabled:cursor-not-allowed')
    expect(inputElement).toHaveClass('disabled:opacity-50')
  })
})
