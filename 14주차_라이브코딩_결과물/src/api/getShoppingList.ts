/* eslint-disable no-unused-vars */
import { axiosGET } from 'api/common/commonAxios'

export type GetShoppingListRequestProps = {

} | null

export type GetShoppingListResponseProps = {

}

export const getShoppingList = (params: GetShoppingListRequestProps) => {
  return axiosGET('/get_shopping_list.php', {})
}