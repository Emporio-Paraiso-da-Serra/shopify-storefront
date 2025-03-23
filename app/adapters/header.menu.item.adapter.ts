import type { HeaderQuery } from 'storefrontapi.generated'

import { normalizeUrl } from '~/helpers/normalize-url'
import type { HeaderMenuItemType } from '~/types/header'

type SourceItem = NonNullable<HeaderQuery['menu']>['items'][number]

export function headerMenuItemAdapter(sourceItem: SourceItem): HeaderMenuItemType {
  const sourceSubItems = sourceItem.items

  let items: HeaderMenuItemType['items'] = []

  if (sourceSubItems && sourceSubItems.length > 1) {
    items = sourceSubItems.map(item => {
      const path = normalizeUrl(String(item.url))
      return { id: item.id, title: item.title, path }
    })
  }

  return {
    id: sourceItem.id,
    title: sourceItem.title,
    path: normalizeUrl(String(sourceItem.url)),
    items,
  }
}
