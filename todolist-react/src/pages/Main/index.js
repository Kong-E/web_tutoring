import { useState } from "react";
import TodoItem from "../../components/TodoItem";
import Input from "../../components/Input";
import "./index.css";

const Main = () => {
  const [todo, setTodo] = useState("");
  const [todoListData, setTodoListData] = useState([]);

  const onChangeTodo = (e) => {
    setTodo((prev) => (prev = e.target.value));
  };

  const onSubmitTodo = () => {
    setTodo((prev) => (prev = ""));
    setTodoListData((prev) => [
      ...prev,
      { id: Date.now(), title: todo, done: false },
    ]);
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
              setTodoListData={setTodoListData}
              todoListData={todoListData}
              // onClickDelete={onClickDelete(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
