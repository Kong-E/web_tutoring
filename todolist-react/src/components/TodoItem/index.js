import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const TodoItem = ({
  id,
  title,
  done,
  onChangeCheckbox,
  onSubmitEdit,
  onClickDelete,
}) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const onClickEdit = (e) => {
    e.preventDefault();
    setEditing((prev) => !prev);
  };

  const onChangeTitle = (e) => {
    setNewTitle(e.target.value);
  };

  useEffect(() => {
    // console.log(editing);
    console.log(done);
  }, [editing, done]);

  return (
    <>
      {editing ? (
        <form
          className="todo_data_editing"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitEdit(id, newTitle);
            setEditing((prev) => !prev);
          }}
        >
          <div></div>
          <input
            className="todo_new_title"
            value={newTitle}
            onChange={onChangeTitle}
          />
          <button className="edit_submit_button" type="submit">
            Save
          </button>
        </form>
      ) : (
        <form className="todo_data">
          <label
            className="todo_done_label"
            htmlFor={`check_box_${id}`}
            style={{
              textDecoration: done ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            <input
              className="todo_done"
              type="checkbox"
              id={`check_box_${id}`}
              defaultChecked={done}
              onChange={() => onChangeCheckbox(id)}
            />
            {title}
          </label>
          <button
            className="edit_button"
            type="button"
            onClick={onClickEdit}
          ></button>
          <button
            className="delete_button"
            type="button"
            onClick={() => onClickDelete(id)}
          ></button>
          <Link
            to={`detail/${id}`}
            state={{
              data: { id, title, done },
            }}
          >
            <button className="detail_button" type="button"></button>
          </Link>
        </form>
      )}
    </>
  );
};

export default TodoItem;
