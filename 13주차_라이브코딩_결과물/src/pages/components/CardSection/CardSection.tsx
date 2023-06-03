import { FC } from 'react'
import { CardContainer, Root, TitleTypo } from './styled'
import sampleShoppingCardListData from 'constants/sampleShoppingCardList.json'
import { ShoppingCard } from 'components/ShoppingCard'

type CardSectionProps = {
  className?: string
}

export const CardSection: FC<CardSectionProps> = ({ className }) => {
  const shoppingCardListData = sampleShoppingCardListData
  return (
    <Root className={className}>
      <TitleTypo>요즘 뜨는 패션</TitleTypo>
      <CardContainer>
        {shoppingCardListData.shopping_card_list.map((shoppingCardItem) => (
          <ShoppingCard
            {...shoppingCardItem}
            itemKey={shoppingCardItem.key}
            key={`shopping_card_item_${shoppingCardItem.key}`}
          />
        ))}
      </CardContainer>
    </Root>
  )
}
