import { createRemixStub } from '@remix-run/testing'
import { act, render, screen } from '@testing-library/react'
import { isLoggedIn } from 'test/mocks/mock.header'

import { HeaderAccount } from '~/components/header/header.account'

describe('HeaderAccount', () => {
  it('should render links to sign in and sign up when not logged in', async () => {
    const signInLinkId = 'header-sign-in-link'
    const signUpLinkId = 'header-sign-up-link'

    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: () => <HeaderAccount isLoggedIn={isLoggedIn(false)} />,
      },
    ])
    await act(async () => render(<RemixStub />))

    const signInLink = screen.getByTestId(signInLinkId)
    expect(signInLink).toBeInTheDocument()
    expect(signInLink).toHaveAttribute('href', '/conta/entrar')

    const signUpLink = screen.getByTestId(signUpLinkId)
    expect(signUpLink).toBeInTheDocument()
    expect(signUpLink).toHaveAttribute('href', '/conta/cadastrar')
  })

  it('should render link to profile when logged in', async () => {
    const profileLinkId = 'header-profile-link'

    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: () => <HeaderAccount isLoggedIn={isLoggedIn(true)} />,
      },
    ])
    await act(async () => render(<RemixStub />))

    const link = screen.getByTestId(profileLinkId)
    expect(link).toBeInTheDocument()
    expect(link).toHaveTextContent('Minha conta')
    expect(link).toHaveAttribute('href', '/conta')
  })

  it('should render links to sign in and sign up when `isLoggedIn` rejects', async () => {
    const signInLinkId = 'header-sign-in-link'
    const signUpLinkId = 'header-sign-up-link'

    const isLoggedIn = () => Promise.reject(new Error('Auth error'))

    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: () => <HeaderAccount isLoggedIn={isLoggedIn()} />,
      },
    ])
    await act(async () => render(<RemixStub />))

    const signInLink = screen.getByTestId(signInLinkId)
    expect(signInLink).toBeInTheDocument()
    expect(signInLink).toHaveAttribute('href', '/conta/entrar')

    const signUpLink = screen.getByTestId(signUpLinkId)
    expect(signUpLink).toBeInTheDocument()
    expect(signUpLink).toHaveAttribute('href', '/conta/cadastrar')
  })
})
