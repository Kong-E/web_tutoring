import { MenuOutlined } from '@ant-design/icons'
import { Button, Typography } from 'antd'
import { CONTAINER_MAX_WIDTH, HEADER_HEIGHT } from 'constants/layout'
import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px #c9c9c9 solid;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`

export const Container = styled.div`
  width: ${CONTAINER_MAX_WIDTH}px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const MenuButton = styled(Button)``

export const LogoWrapper = styled.div`
  width: 50px;
  height: 50px;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  border-radius: 20px;
  margin-right: 20px;
  cursor: pointer;
`

export const LogoTypo = styled(Typography)``

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const UserLoginButton = styled(Button)``
export const UserJoinButton = styled(Button)``

export const MMenuContainer = styled.div`
  padding-right: 20px;
`

export const MMenuButton = styled(MenuOutlined)``
