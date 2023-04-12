import { useState } from "react";
import TodoItem from "../../components/TodoItem/TodoItem";
import Input from "../../components/Input/Input";

const Main = () => {
  const [todo, setTodo] = useState("");
  const [todoListData, setTodoListData] = useState([]);

  const onChangeTodo = (e) => {
    setTodo((prev) => (prev = e.target.value));
  };

  const onSubmitTodo = (e) => {
    e.preventDefault();
    setTodo((prev) => (prev = ""));
    setTodoListData((prev) => [
      ...prev,
      { id: Date.now(), title: todo, done: false },
    ]);
  };

  return (
    <div>
      <Input
        onChangeTodo={onChangeTodo}
        onSubmitTodo={onSubmitTodo}
        todo={todo}
      />
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
  );
};

export default Main;
