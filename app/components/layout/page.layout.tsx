import { Aside } from '~/components/Aside'
import { Header } from '~/components/header'
import type { HeaderProps } from '~/types/header'

interface PageLayoutProps {
  header: HeaderProps['header']
  isLoggedIn: HeaderProps['isLoggedIn']
  children: React.ReactNode
}

export function PageLayout({ header, isLoggedIn, children }: PageLayoutProps) {
  return (
    <Aside.Provider>
      <Header header={header} isLoggedIn={isLoggedIn} />

      <div className='container'>{children}</div>
    </Aside.Provider>
  )
}
