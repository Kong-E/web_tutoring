import styled from "styled-components";
import header from "../../assets/images/header_bg.png";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  flex-wrap: wrap;
  width: 1100px;
  margin: 0 auto;
`;

/* export const MainContainer = styled(Root)`
  padding: 50px 22px;
`; */

export const MainSection = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 800px;
  background-image: url(${header});
  background-repeat: no-repeat;
  background-size: auto 800px;
  background-color: #ececec;
`;

export const TypoContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: flex-end;
  padding: 300px 100px 0 0;
`;

export const MainTypo = styled.div`
  width: 400px;
  font-size: 36px;
  font-weight: bold;
  text-align: right;
  align-self: flex-end;
`;

export const DescTypo = styled(MainTypo)`
  width: 550px;
  font-size: 19px;
  line-height: 1.6;
`;

export const MainOfferSection = styled.div`
  background-image: none;
  background-color: #fff;
  height: 1250px;
`;

export const MainFullServiceSection = styled.div`
  height: 1100px;
`;

export const TitleSection = styled.div`
  padding-top: 40px;
`;

export const TitleTypo = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

export const TitleTypoYellow = styled(TitleTypo)`
  color: #fec83d;
`;

export const TitleTypoGray = styled(TitleTypo)`
  color: #7e8478;
`;

export const FullServiceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
`;

export const TypoSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`;

export const FullServiceTypo = styled.div`
  width: 500px;
  font-size: 14.5px;
  line-height: 2;
  margin-bottom: 30px;
`;

export const FullServiceTypoTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const FullServiceTypoDesc = styled.div`
  width: 100%;
`;

export const FullServiceImage = styled.img`
  margin-left: 30px;
  width: 550px;
`;

export const FullServiceProgress = styled.img`
  width: 500px;
`;

export const EmailImage = styled.img`
  display: block;
  width: 100%;
  height: 360px;
  transform: scale(1.07, 1.07);
  margin-top: 10px;
`;
