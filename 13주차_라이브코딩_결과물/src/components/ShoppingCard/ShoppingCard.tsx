import { FC } from 'react'
import { CountContainer, CountTypo, ProfileImg, Root, StyledMeta } from './styled'
import shoppingCardImg from 'assets/images/shopping_card_img.png'
import { LikeFilled, EyeFilled } from '@ant-design/icons'
import { locationHref } from 'utils/locationHref'
import { SMALL_CARD_WIDTH } from 'constants/layout'

type ShoppingCardProps = {
  className?: string
  itemKey: number
  title: string
  description: string
  likeCount: number
  viewCount: number
  location: string
}

export const ShoppingCard: FC<ShoppingCardProps> = ({
  className,
  title,
  description,
  likeCount,
  viewCount,
  location,
}) => {
  const onClickRoot = () => {
    locationHref({ location, newWindow: true })
  }
  return (
    <Root
      className={className}
      hoverable
      onClick={onClickRoot}
      style={{ width: SMALL_CARD_WIDTH }}
      cover={<ProfileImg alt="shopping_card_img" src={shoppingCardImg} />}
    >
      <StyledMeta title={title} description={description} />
      <CountContainer>
        <CountTypo>
          <EyeFilled /> {viewCount}
        </CountTypo>
        <CountTypo>
          <LikeFilled /> {likeCount}
        </CountTypo>
      </CountContainer>
    </Root>
  )
}
