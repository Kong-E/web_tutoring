/* eslint-disable no-unused-vars */
import { Button, Typography } from 'antd'
import {
  CONTAINER_MAX_WIDTH,
  DETAIL_PAGE_PROFILE_IMG_HEIGHT,
  DETAIL_PAGE_PROFILE_IMG_WIDTH,
  HEADER_HEIGHT,
} from 'constants/layout'
import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: ${HEADER_HEIGHT}px;
`

export const Container = styled.div`
  width: ${CONTAINER_MAX_WIDTH}px;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`

export const ProfileImg = styled.img`
  width: ${DETAIL_PAGE_PROFILE_IMG_WIDTH}px;
  height: ${DETAIL_PAGE_PROFILE_IMG_HEIGHT}px;
  object-fit: contain;
  border: 1px #eee solid;
  border-radius: 8px;
`

export const ContentContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 20px;
`

export const TitleTypo = styled(Typography)`
  &&& {
    font-size: 24px;
    font-weight: bold;
  }
`

export const DescriptionTypo = styled(Typography)`
  &&& {
    font-size: 16px;
    font-weight: 500;
  }
`

export const CountTypo = styled(Typography)`
  &&& {
    font-size: 14px;
    font-weight: 500;
  }
`

export const ListButton = styled(Button)`
  margin-top: 20px;
`
