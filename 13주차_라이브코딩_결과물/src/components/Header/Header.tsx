import { FC } from 'react'
import {
  Container,
  LogoTypo,
  LogoWrapper,
  MenuButton,
  MenuContainer,
  Root,
  UserContainer,
  UserJoinButton,
  UserLoginButton,
} from './styled'

type HeaderProps = {
  className?: string
}

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Container>
        <MenuContainer>
          <LogoWrapper>
            <LogoTypo>로고</LogoTypo>
          </LogoWrapper>
          <MenuButton type={'text'}>옷</MenuButton>
          <MenuButton type={'text'}>신발</MenuButton>
          <MenuButton type={'text'}>모자</MenuButton>
        </MenuContainer>
        <UserContainer>
          <UserLoginButton>로그인</UserLoginButton>
          <UserJoinButton type={'primary'}>회원가입</UserJoinButton>
        </UserContainer>
      </Container>
    </Root>
  )
}
