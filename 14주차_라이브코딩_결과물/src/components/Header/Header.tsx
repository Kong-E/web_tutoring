import { FC } from 'react'
import {
  Container,
  LogoTypo,
  LogoWrapper,
  MMenuButton,
  MMenuContainer,
  MenuButton,
  MenuContainer,
  Root,
  UserContainer,
  UserJoinButton,
  UserLoginButton,
} from './styled'
import { useNavigate } from 'react-router-dom'
import { Display } from 'components/Display'

type HeaderProps = {
  className?: string
}

export const Header: FC<HeaderProps> = ({ className }) => {
  const navigate = useNavigate()

  const onClickLogo = () => {
    navigate('/')
  }

  return (
    <Root className={className}>
      <Container>
        <MenuContainer>
          <LogoWrapper onClick={onClickLogo}>
            <LogoTypo>로고</LogoTypo>
          </LogoWrapper>
          <Display on={'DESKTOP'}>
            <>
              <MenuButton type={'text'}>옷</MenuButton>
              <MenuButton type={'text'}>신발</MenuButton>
              <MenuButton type={'text'}>모자</MenuButton>
            </>
          </Display>
        </MenuContainer>
        <Display on={'DESKTOP'}>
          <UserContainer>
            <UserLoginButton>로그인</UserLoginButton>
            <UserJoinButton type={'primary'}>회원가입</UserJoinButton>
          </UserContainer>
        </Display>
        <Display on={'MOBILE'}>
          <MMenuContainer>
            <MMenuButton />
          </MMenuContainer>
        </Display>
      </Container>
    </Root>
  )
}
