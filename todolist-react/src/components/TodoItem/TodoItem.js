import { useState } from "react";

const TodoItem = ({ title }) => {
  const [checked, setChecked] = useState(false);

  const onClickCheckbox = () => {
    setChecked((prev) => !prev);
  };

  return <li>{title}</li>;
};

export default TodoItem;
