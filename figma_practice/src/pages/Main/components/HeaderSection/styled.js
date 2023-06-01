import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Container = styled(Root)`
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
`;

export const IconBar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
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
  position: absolute;
  top: 50px;
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
  width: 40px;
  padding-bottom: 5px;
  object-fit: contain;
  cursor: pointer;
`;
