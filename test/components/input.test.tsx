import { render } from '@testing-library/react'

import { Input } from '~/components/ui'

describe('Input', () => {
  it('should be rendered with error style', () => {
    const errorClasses = ['border-error', 'text-error', 'placeholder:text-error-light']

    const inputId = 'input'
    const { getByTestId } = render(<Input variant='error' data-testid={inputId} />)
    const inputElement = getByTestId(inputId)

    errorClasses.forEach(errorClass => expect(inputElement).toHaveClass(errorClass))
  })
})
