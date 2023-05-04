import { Root } from "./styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const Detail = ({ onChangeCheckbox, onSubmitEdit, onClickDelete }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state;
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(data.title);

  const onClickEdit = (e) => {
    e.preventDefault();
    setEditing((prev) => !prev);
  };

  const onChangeTitle = (e) => {
    setNewTitle((prev) => (prev = e.target.value));
  };

  // console.log(data);
  useEffect(() => {
    setNewTitle((prev) => (prev = data.title));
  }, [data.title]);

  return (
    <>
      <Root>
        <Link to="/">Back</Link>
        {editing ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmitEdit(data.id, newTitle);
              setEditing(false);
            }}
          >
            <input value={newTitle} onChange={onChangeTitle} />
            <button type="submit">Save</button>
          </form>
        ) : (
          <>
            <label
              htmlFor={`check_box_${data.id}`}
              style={{
                textDecoration: data.done ? "line-through" : "none",
              }}
            >
              <input
                className="todo_done"
                type="checkbox"
                id={`check_box_${data.id}`}
                defaultChecked={data.done}
                onChange={() => onChangeCheckbox(data.id)}
              />
              {data.title}
            </label>
            <button onClick={onClickEdit}>Edit</button>
            <button
              onClick={() => {
                onClickDelete(data.id);
                navigate("/");
              }}
            >
              Delete
            </button>
          </>
        )}
      </Root>
    </>
  );
};
