/* eslint-disable no-unused-vars */
import { FC, useEffect, useState } from 'react'
import { CardContainer, Root, TitleTypo } from './styled'
import { ShoppingCard } from 'components/ShoppingCard'
import { getShoppingList } from 'api/getShoppingList'
import { ShoppingCartListType } from 'types/common'
import { camelizeKey } from 'utils/camelizeKey'

type CardSectionProps = {
  className?: string
}

export const CardSection: FC<CardSectionProps> = ({ className }) => {
  const [shoppingCardList, setShoppingCardList] = useState<ShoppingCartListType>([])

  useEffect(() => {
    getShoppingList({}).then((response: any) => {
      if(response){
        const newShoppingCardList = camelizeKey(response.data) as any
        setShoppingCardList(newShoppingCardList)
      }
    })
  }, [])

  return (
    <Root className={className}>
      <TitleTypo>요즘 뜨는 패션</TitleTypo>
      <CardContainer>
        {shoppingCardList.map((shoppingCardItem) => (
          <ShoppingCard
            {...shoppingCardItem}
            itemKey={shoppingCardItem.pk}
            key={`shopping_card_item_${shoppingCardItem.pk}`}
          />
        ))}
      </CardContainer>
    </Root>
  )
}
