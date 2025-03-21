import type React from 'react'

interface ShowProps {
  when?: boolean | null
  children: React.ReactNode
  fallback?: React.ReactNode
}

/** Renders the `children` when condition is `true` otherwise renders the `fallback`. */
export function Show({ when, children, fallback }: Readonly<ShowProps>) {
  if (!when) return fallback

  return children
}

/*
  USAGE

  <Show when={true} fallback={<Fallback />}>
    <Component />
  </Show>
  
*/
