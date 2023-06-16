/* eslint-disable no-unused-vars */
import { FC, useEffect, useState } from 'react'
import { Container, ContentContainer, CountTypo, DescriptionTypo, ListButton, ProfileImg, Root, TitleTypo } from './styled'
import { useNavigate, useParams } from 'react-router-dom'
import { getShoppingItemDetail } from 'api/getShoppingItemDetail'
import { ShoppingCartItemType } from 'types/common'
import shoppingCardImg from 'assets/images/shopping_card_img.png'
import { camelizeKey } from 'utils/camelizeKey'
import { Header } from 'components/Header'

type ShoppingDetailPageProps = {
  className?: string
}

export const ShoppingDetailPage: FC<ShoppingDetailPageProps> = ({ className }) => {
  const { shoppingItemPk } = useParams()
  const navigate = useNavigate()
  const [shoppingItem, setShoppingItem] = useState<ShoppingCartItemType>()

  const onClickListButton = () => {
    navigate('/')
  }

  useEffect(() => {
    if (shoppingItemPk) {
      getShoppingItemDetail({ pk: +shoppingItemPk }).then((response: any) => {
        const newShoppingItem = camelizeKey(response.data) as any
        setShoppingItem(newShoppingItem)
      })
    }
  }, [])

  return (
    <Root className={className}>
      <Header />
      {shoppingItem && (
        <Container>
          <ProfileImg alt="shopping_card_img" src={shoppingCardImg} />
          <ContentContainer>
            <TitleTypo>{shoppingItem.title}</TitleTypo>
            <DescriptionTypo>{shoppingItem.description}</DescriptionTypo>
            <CountTypo>
              조회수 : {shoppingItem.viewCount}
            </CountTypo>
            <CountTypo>
              좋아요 수 : {shoppingItem.likeCount}
            </CountTypo>
            <ListButton type='primary' onClick={onClickListButton} >
              목록으로
            </ListButton>
          </ContentContainer>
        </Container>
      )}
    </Root>
  )
}
