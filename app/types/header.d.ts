import type { NavLinkProps } from '@remix-run/react'
import type { HeaderQuery } from 'storefrontapi.generated'

export type HeaderMenuType = HeaderQuery['menu']

type BaseHeaderMenuItemType = {
  id: string
  title: string
  path: NavLinkProps['to']
}

export type HeaderMenuItemType = BaseHeaderMenuItemType & {
  items: BaseHeaderMenuItemType[]
}
