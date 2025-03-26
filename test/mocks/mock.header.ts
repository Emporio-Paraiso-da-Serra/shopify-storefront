import type { HeaderProps } from '~/types/header'

export const isLoggedIn = (value: boolean): HeaderProps['isLoggedIn'] => Promise.resolve(value)
