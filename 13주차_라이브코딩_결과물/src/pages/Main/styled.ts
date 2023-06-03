import { CONTAINER_MAX_WIDTH, HEADER_HEIGHT } from 'constants/layout'
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
  flex-direction: column;
`
