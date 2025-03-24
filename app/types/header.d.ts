import type { NavLinkProps } from '@remix-run/react'
import type { HeaderQuery } from 'storefrontapi.generated'

type HeaderType = HeaderQuery

export type HeaderMenuType = HeaderType['menu']

export type HeaderMenuItemType = {
  id: string
  title: string
  path: NavLinkProps['to']
  items: Pick<HeaderMenuItemType, 'id' | 'title' | 'path'>[]
}

export interface HeaderProps {
  header: HeaderType
}
