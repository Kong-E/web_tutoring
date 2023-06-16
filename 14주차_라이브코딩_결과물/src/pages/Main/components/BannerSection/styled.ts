import { Typography } from 'antd'
import { CONTAINER_MAX_WIDTH, MOBILE_MAX_WIDTH } from 'constants/layout'
import styled from 'styled-components'

const MOBILE_BANNER_MIN_HEIGHT = 350

export const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  width: ${CONTAINER_MAX_WIDTH}px;
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

export const MContainer = styled.div`
  max-width: ${MOBILE_MAX_WIDTH}px;
  height: 200px;
  overflow: hidden;
  position: relative;
`

export const MRootImg = styled.img`
  min-height: ${MOBILE_BANNER_MIN_HEIGHT}px;
  object-fit: cover;
`

export const MBannerTypo = styled(Typography)`
  &&& {
    font-size: 24px;
    font-weight: 700;
    color: white;
    position: absolute;
    top: 50px;
    left: 150px;
    z-index: 1;
  }
`