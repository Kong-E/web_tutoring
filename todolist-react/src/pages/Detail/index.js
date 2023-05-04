import { Root, Form, EditForm } from "./styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Detail = ({ onChangeCheckbox, onSubmitEdit, onClickDelete }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state;
  const [edit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(data.title);
  const [newDone, setNewDone] = useState(data.done);

  const onClickEdit = (e) => {
    e.preventDefault();
    setEdit((prev) => !prev);
  };

  const onChangeTitle = (e) => {
    setNewTitle((prev) => (prev = e.target.value));
  };

  return (
    <>
      <Root>
        <Link to="/">
          <button className="back_button" type="button"></button>
        </Link>
        {edit ? (
          <EditForm
            onSubmit={(e) => {
              e.preventDefault();
              onSubmitEdit(data.id, newTitle);
              setEdit(false);
            }}
          >
            <input
              className="todo_new_title"
              value={newTitle}
              onChange={onChangeTitle}
            />
            <button className="edit_submit_button" type="submit">
              Save
            </button>
          </EditForm>
        ) : (
          <>
            <Form>
              <label
                className="todo_done_label"
                htmlFor={`check_box_${data.id}`}
                style={{
                  textDecoration: newDone ? "line-through" : "none",
                  cursor: "pointer",
                }}
              >
                <input
                  className="todo_done"
                  type="checkbox"
                  id={`check_box_${data.id}`}
                  defaultChecked={newDone}
                  onChange={() => {
                    onChangeCheckbox(data.id);
                    setNewDone((prev) => !prev);
                  }}
                />
                {newTitle}
              </label>
              <button
                className="edit_button"
                type="button"
                onClick={onClickEdit}
              ></button>
              <button
                className="delete_button"
                type="button"
                onClick={() => {
                  onClickDelete(data.id);
                  navigate("/");
                }}
              ></button>
            </Form>
          </>
        )}
      </Root>
    </>
  );
};
