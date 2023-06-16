import { axiosPOST } from './common/commonAxios'

export type PostLoginRequestProps = {
  id: string;
  password: string;
}

export type PostLoginResponseProps = {
  pk: number
}

export const postLogin = ({id, password}: PostLoginRequestProps) => {
  return axiosPOST('/login.php', {id, password})
}
