import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 65px 0;
  gap: 15px;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  height: 200px;
  /* margin-bottom: 20px; */
  background: #ffffff;
  box-shadow: 0px 4px 34px rgba(0, 0, 0, 0.1);
  border-radius: 29px;
`;

export const CardImage = styled.img`
  width: 270px;
  border-radius: 29px;
`;

export const CardTypoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  padding: 20px 20px 20px 0;
`;

export const CardTitleTypo = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const CardDescTypo = styled.div`
  font-size: 12px;
  line-height: 1.5;
`;

export const CardTypoButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  border-radius: 10px;
  background-color: #ebe9e9;
  padding: 10px 10px 10px 25px;
  border: none;
  font-size: 16px;
  color: #009d9d;
  cursor: pointer;
`;
