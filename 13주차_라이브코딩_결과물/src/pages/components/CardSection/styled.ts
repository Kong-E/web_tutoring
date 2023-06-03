import styled from 'styled-components'
import { Typography } from 'antd'

export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px 0;
`

export const TitleTypo = styled(Typography)`
  font-size: 20px;
  font-weight: 500;
`

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  margin-top: 20px;
`
