import { axiosGET } from 'api/common/commonAxios'

export type GetShoppingItemDetailRequestProps = {
  pk: number
}

export type GetShoppingItemDetailResponseProps = {}

export const getShoppingItemDetail = ({ pk }: GetShoppingItemDetailRequestProps) => {
  return axiosGET('get_shopping_item_detail.php', { pk })
}
