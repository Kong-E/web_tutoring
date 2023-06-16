import styled from 'styled-components'
import { Card, Typography } from 'antd'
const { Meta } = Card

export const Root = styled(Card)``
export const ProfileImg = styled.img``
export const StyledMeta = styled(Meta)``
export const CountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
`

export const CountTypo = styled(Typography)`
  font-size: 10px;
  color: #1119;
`
