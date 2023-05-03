import { Root, ItemCard, ItemCard2 } from "./styles";
import { Link, useLocation } from "react-router-dom";

export const Detail = ({ onChangeCheckbox, onSubmitEdit, onClickDelete }) => {
  const location = useLocation();
  const { data } = location.state;
  console.log(data);
  return (
    <>
      <Root>
        <ItemCard color="coral">
          <Link to="/">Back</Link>
        </ItemCard>
        <ItemCard2>
          {data.id}&nbsp;
          {data.title}
          button
        </ItemCard2>
      </Root>
    </>
  );
};
