import { useEffect, useState } from "react";
import "./index.css";

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

  const onClickEditing = (e) => {
    e.preventDefault();
    setEditing((prev) => !prev);
  };

  const onChangeTitle = (e) => {
    const { value } = e.target;
    setNewTitle(value);
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

  useEffect(() => {
    console.log(editing);
  }, [editing]);

  return (
    <>
      {editing ? (
        <form className="todo_data_editing" onSubmit={onSubmitEditing}>
          <div></div>
          <input
            class="todo_new_title"
            value={newTitle}
            onChange={onChangeTitle}
          />
          <button className="edit_submit_button" type="submit">
            Edit
          </button>
        </form>
      ) : (
        <form className="todo_data">
          <label
            className="todo_title"
            htmlFor={`check_box_${id}`}
            style={{
              textDecoration: checked ? "line-through" : "none",
            }}
          >
            <input
              className="todo_done"
              type="checkbox"
              id={`check_box_${id}`}
              checked={checked}
              onChange={onChangeCheckbox}
            />
            {title}
          </label>
          <button className="edit_button" onClick={onClickEditing}></button>
          <button
            className="delete_button"
            type="button"
            onClick={onClickDelete}
          ></button>
        </form>
      )}
    </>
  );
};

export default TodoItem;
