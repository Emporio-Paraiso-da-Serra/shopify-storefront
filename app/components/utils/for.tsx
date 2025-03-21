import React from 'react'

interface ForProps<T> {
  list?: T[]
  fallback?: React.ReactNode
  children: (item: T, index?: number) => React.ReactNode
  keyExtractor?: (item: T) => string | number
}

/** Renders the `children` for each element or renders the `fallback` if it's empty or not an array. */
export function For<T>({ list, fallback, children, keyExtractor }: Readonly<ForProps<T>>) {
  if (!list || list.length <= 0) return fallback

  return list.map((item, index) => (
    <React.Fragment key={keyExtractor ? keyExtractor(item) : index}>{children(item, index)}</React.Fragment>
  ))
}

/*
  USAGE

  <For list={array} fallback={<Fallback />}>
    {item => <Component {...item} />}
  </For>

*/
