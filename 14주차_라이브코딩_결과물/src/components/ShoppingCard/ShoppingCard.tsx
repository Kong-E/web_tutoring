import { FC } from 'react'
import { CountContainer, CountTypo, ProfileImg, Root, StyledMeta } from './styled'
import shoppingCardImg from 'assets/images/shopping_card_img.png'
import { LikeFilled, EyeFilled } from '@ant-design/icons'
import { SMALL_CARD_WIDTH } from 'constants/layout'
import { useNavigate } from 'react-router-dom'

type ShoppingCardProps = {
  className?: string
  itemKey: number
  title: string
  description: string
  likeCount: number
  viewCount: number
}

export const ShoppingCard: FC<ShoppingCardProps> = ({
  className,
  itemKey,
  title,
  description,
  likeCount,
  viewCount,
}) => {
  const navigate = useNavigate()

  const onClickRoot = () => {
    navigate(`/shopping/detail/${itemKey}`)
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
