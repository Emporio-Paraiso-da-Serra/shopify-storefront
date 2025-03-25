import { Aside } from '~/components/Aside'
import { Header } from '~/components/header'
import type { HeaderType } from '~/types/header'

interface PageLayoutProps {
  header: HeaderType
  children: React.ReactNode
}

export function PageLayout({ header, children }: PageLayoutProps) {
  return (
    <Aside.Provider>
      <Header header={header} />

      <div className='container'>{children}</div>
    </Aside.Provider>
  )
}
