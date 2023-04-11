import { useState } from "react";

const TodoItem = ({ id, title, setTodoListData }) => {
  // const [checked, setChecked] = useState(false);
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  // const onClickCheckbox = () => {
  //   setChecked((prev) => !prev);
  // };

  const onChangeTitle = (e) => {
    const { value } = e.target;
    setNewTitle((prev) => (prev = value));
  };

  const onSubmitEditing = () => {
    setEditing((prev) => !prev);
    setTodoListData((prev) =>
      prev.map((todoData) =>
        todoData.id === id ? { ...todoData, title: newTitle } : todoData
      )
    );
  };

  return (
    <>
      {editing ? (
        <form onSubmit={onSubmitEditing}>
          <input value={newTitle} onChange={onChangeTitle} />
          <button>완료</button>
        </form>
      ) : (
        <>
          <li>{title}</li>
          <button onClick={() => setEditing((prev) => !prev)}>수정</button>
        </>
      )}
    </>
  );
};

export default TodoItem;
