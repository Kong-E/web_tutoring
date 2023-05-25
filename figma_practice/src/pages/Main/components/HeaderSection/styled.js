import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Container = styled(Root)`
  max-width: 1100px;
  margin: 0 auto;
`;

export const IconBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 13px;
  width: 100%;
  height: 40px;
`;

export const Icon = styled.img`
  width: 13px;
  height: 13px;
  object-fit: contain;
  cursor: pointer;
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  gap: 40px;
`;

export const LogoImage = styled.img`
  width: 450px;
  cursor: pointer;
`;

export const MenuIcon = styled.img`
  width: 35px;
  padding-bottom: 5px;
  object-fit: contain;
  cursor: pointer;
`;
