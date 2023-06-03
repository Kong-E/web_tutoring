import { FC } from 'react'
import { Container, Root } from './styled'
import { Header } from 'components/Header'
import { BannerSection } from 'pages/components/BannerSection'
import { CardSection } from 'pages/components/CardSection'

type MainPageProps = {
  className?: string
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Header />
      <BannerSection />
      <Container>
        <CardSection />
        <CardSection />
        <CardSection />
      </Container>
    </Root>
  )
}
