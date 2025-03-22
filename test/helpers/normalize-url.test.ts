import { describe, expect, it } from 'vitest'

import { STORE_BASE_URL } from '~/constants/store'
import { normalizeUrl } from '~/helpers/normalize-url'

describe('normalizeUrl', () => {
  const pathname = '/products/123'
  const internalUrl = `${STORE_BASE_URL}${pathname}`
  const externalUrl = 'https://external.com/products/123'

  it('should strip the domain and return the pathname for internal URLs', () => {
    const result = normalizeUrl(internalUrl)
    expect(result).toBe(pathname)
  })

  it('should return the original URL for external URLs', () => {
    const result = normalizeUrl(externalUrl)
    expect(result).toBe(externalUrl)
  })

  it('should return "/" for `undefined` input', () => {
    const result = normalizeUrl(undefined)
    expect(result).toBe('/')
  })

  it('should return "/" for empty string input', () => {
    const result = normalizeUrl('')
    expect(result).toBe('/')
  })

  it('should strip the domain and return URLs with query parameters', () => {
    const urlWithQuery = `${internalUrl}?color=red`

    const result = normalizeUrl(urlWithQuery)
    expect(result).toBe(pathname)
  })

  it('should handle URLs with hash fragments', () => {
    const urlWithHash = `${internalUrl}#details`

    const result = normalizeUrl(urlWithHash)
    expect(result).toBe(pathname)
  })

  it('should handle URLs with both query parameters and hash fragments', () => {
    const urlWithQueryAndHash = `${internalUrl}?color=red#details`

    const result = normalizeUrl(urlWithQueryAndHash)
    expect(result).toBe(pathname)
  })

  it('should handle URLs with trailing slashes', () => {
    const urlWithTrailingSlash = `${internalUrl}/`

    const result = normalizeUrl(urlWithTrailingSlash)
    expect(result).toBe(`${pathname}/`)
  })
})
