import { useState } from "react";

const TodoItem = ({ id, title, setTodoListData, todoListData }) => {
  const [checked, setChecked] = useState(false);
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const onChangeCheckbox = () => {
    setChecked((prev) => !prev);
    setTodoListData((prev) =>
      prev.map((todoData) =>
        todoData.id === id ? { ...todoData, done: !todoData.done } : todoData
      )
    );
  };

  const onChangeTitle = (e) => {
    const { value } = e.target;
    setNewTitle((prev) => (prev = value));
  };

  const onSubmitEditing = (e) => {
    e.preventDefault();
    setEditing((prev) => !prev);
    setTodoListData((prev) =>
      prev.map((todoData) =>
        todoData.id === id ? { ...todoData, title: newTitle } : todoData
      )
    );
  };

  const onClickDelete = () => {
    setTodoListData((prev) => prev.filter((todoData) => todoData.id !== id));
  };

  return (
    <>
      {editing ? (
        <form onSubmit={onSubmitEditing}>
          <input value={newTitle} onChange={onChangeTitle} />
          <button type="submit">완료</button>
        </form>
      ) : (
        <form>
          <input
            name="done"
            type="checkbox"
            checked={checked}
            onChange={onChangeCheckbox}
          />
          <div
            name="done"
            style={{
              display: "inline-block",
              textDecoration: checked ? "line-through" : "none",
            }}
          >
            {title}
          </div>
          <button onClick={() => setEditing((prev) => !prev)}>수정</button>
          <button onClick={onClickDelete}>삭제</button>
        </form>
      )}
    </>
  );
};

export default TodoItem;
