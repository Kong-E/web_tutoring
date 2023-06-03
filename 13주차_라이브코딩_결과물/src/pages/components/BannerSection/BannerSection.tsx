import { FC } from 'react'
import { BannerTypo, Root, RootImg } from './styled'
import mainBannerImg from 'assets/images/main_banner_img.png'

type BannerSectionProps = {
  className?: string
}

export const BannerSection: FC<BannerSectionProps> = ({ className }) => {
  return (
    <Root className={className}>
      <RootImg src={mainBannerImg} alt={'main_banner_img'} />
      <BannerTypo>아름다운 당신, 더 아름답게</BannerTypo>
    </Root>
  )
}
