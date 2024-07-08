import { Container } from '@mantine/core'

import { Header } from '@/widgets/Header/Header'

interface BaseLayoutProps {
  children: React.ReactNode
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <Header />

      <Container size={1400}>{children}</Container>
    </>
  )
}
