import { FC } from 'react'
import { BannerTypo, Container, MBannerTypo, MContainer, MRootImg, Root, RootImg } from './styled'
import mainBannerImg from 'assets/images/main_banner_img.png'
import { Display } from 'components/Display'

type BannerSectionProps = {
  className?: string
}

export const BannerSection: FC<BannerSectionProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Display on={'DESKTOP'}>
        <Container>
          <RootImg src={mainBannerImg} alt={'main_banner_img'} />
          <BannerTypo>아름다운 당신, 더 아름답게</BannerTypo>
        </Container>
      </Display>
      <Display on={'MOBILE'}>
        <MContainer>
          <MRootImg src={mainBannerImg} alt={'main_banner_img'} />
          <MBannerTypo>아름다운 당신, 더 아름답게</MBannerTypo>
        </MContainer>
      </Display>
    </Root>
  )
}
