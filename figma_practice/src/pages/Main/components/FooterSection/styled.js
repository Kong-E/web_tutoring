import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0px;
  gap: 140px;
  width: 1100px;
  height: 270px;
  /* background-color: yellow; */
  margin-top: 10px;
  margin-bottom: 100px;
`;

export const Section = styled.div`
  width: fit-content;
  height: 100%;

  &:first-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25%;
  }

  &:last-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    width: 25%;
  }
`;

export const LogoImage = styled.img`
  width: 200px;
  height: auto;
  object-fit: contain;
  margin-top: 5px;
  /* margin-bottom: 10px; */
`;

export const TitleTypo = styled.div`
  font-size: 12px;
  color: #c84b04;
  line-height: 2.5;
`;

export const DefaultTypo = styled.div`
  width: max-content;
  font-size: 11px;
  line-height: 2.5;
`;

export const SubscribeTypo = styled.div`
  width: 180px;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const EmailInput = styled.input`
  position: relative;
  width: 180px;
  height: 40px;
  border: none;
  border-bottom: 1.5px solid lightgray;
  padding: 2px 0;
  font-size: 11px;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #bfbfbf;
  }
`;

export const EmailInputButton = styled.button`
  position: relative;
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  padding-right: 2px;
  border: none;
  border-bottom: 1.5px solid lightgray;
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
  background-color: #fec83d;
  color: #5e4dcd;
  font-weight: bold;
  cursor: pointer;
`;

export const UpButton = styled.button`
  background-color: #fec83d;
  border: none;
  border-radius: 50%;
  padding-top: 6px;
  width: 45px;
  height: 45px;
  cursor: pointer;
  color: #5e4dcd;
  font-size: 18px;
  font-weight: 500;
`;

export const IconBar = styled.div`
  width: 90px;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.img`
  width: 13px;
  height: 13px;
  object-fit: contain;
  cursor: pointer;
`;
