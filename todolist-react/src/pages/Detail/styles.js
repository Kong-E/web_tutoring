import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

/* export const ItemCardRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  color: white;
`;

// 자식이 우선순위가 높음
export const ItemCard = styled(ItemCardRoot)`
  width: 200px;
  background-color: ${(props) => props.color};
`;

export const ItemCard2 = styled(ItemCardRoot)`
  background-color: blue;
`; */

// 리드, 업데이트(타이틀 바꾸기), 딜리트(내 생각엔 딜리트 되면 리다이렉트), 토글, (콘텐트는 옵션)
// RUD + 토글
/* 
쿠키 : 만료일자가 있음, 로그인 정보 저장, 
세션 : 팝업창,
로컬스토리지
 */
