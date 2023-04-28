import { useState } from "react";
import TodoItem from "../../components/TodoItem";
import Input from "../../components/Input";
import "./index.css";

const Main = () => {
  const [todo, setTodo] = useState("");
  const [todoListData, setTodoListData] = useState([]);

  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  const onSubmitTodo = () => {
    setTodo((prev) => (prev = ""));
    if (todo === "") return;
    setTodoListData((prev) => [
      ...prev,
      { id: Date.now(), title: todo, done: false },
    ]);
  };

  const onChangeCheckbox = (id) => {
    setTodoListData((prev) =>
      prev.map((todoData) =>
        todoData.id === id ? { ...todoData, done: !todoData.done } : todoData
      )
    );
  };

  const onSubmitEdit = (id, newTitle) => {
    console.log("edit");
    setTodoListData((prev) =>
      prev.map((todoData) =>
        todoData.id === id ? { ...todoData, title: newTitle } : todoData
      )
    );
  };

  const onClickDelete = (id) => {
    setTodoListData((prev) => prev.filter((todoData) => todoData.id !== id));
  };

  return (
    <div className="main_root">
      <Input
        onChangeTodo={onChangeTodo}
        onSubmitTodo={onSubmitTodo}
        todo={todo}
      />
      <div className="todo_list_wrapper">
        <div className="todo_list_container">
          {todoListData.map((todoList, index) => (
            <TodoItem
              key={`todo_item_${index}`}
              {...todoList}
              onChangeCheckbox={onChangeCheckbox}
              onSubmitEdit={onSubmitEdit}
              onClickDelete={onClickDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
