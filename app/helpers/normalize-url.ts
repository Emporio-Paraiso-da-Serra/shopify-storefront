import { STORE_BASE_URL } from '~/constants/store'

/** Strips the domain and returns the pathname for internal URLs.
 *
 * Returns the original URL for external links. */

export function normalizeUrl(url?: string) {
  if (!url) {
    return '/'
  }

  const isInternalUrl = url.includes(STORE_BASE_URL)

  if (isInternalUrl) {
    const path = new URL(url).pathname
    return path
  }

  return url
}
