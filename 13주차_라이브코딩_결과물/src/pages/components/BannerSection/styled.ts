import { Typography } from 'antd'
import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;
  position: relative;
`

export const RootImg = styled.img`
  width: 100%;
  object-fit: cover;
`

export const BannerTypo = styled(Typography)`
  &&& {
    font-size: 36px;
    font-weight: 700;
    color: white;
    position: absolute;
    top: 50px;
    left: 100px;
    z-index: 1;
  }
`
