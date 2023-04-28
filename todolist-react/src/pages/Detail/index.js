import { Root, ItemCard, ItemCard2 } from "./styles";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const { id } = useParams();
  return (
    <Root>
      <ItemCard color="orange">{id}</ItemCard>
      <ItemCard2>asd</ItemCard2>
    </Root>
  );
};
