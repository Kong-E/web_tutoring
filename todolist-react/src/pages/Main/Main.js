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
    setTodoListData((prev) => [...prev, { title: todo, done: false }]);
  };

  // const onClickDelete = (id) => () => {
  //   //filter함수사용
  //   setTodoListData((prev) => prev.filter((value, index) => id !== index));
  // };

  return (
    <div>
      <Input
        onChangeTodo={onChangeTodo}
        onSubmitTodo={onSubmitTodo}
        todo={todo}
      />
      {todoListData.map((todoList, index) => (
        <TodoItem
          {...todoList}
          // onClickDelete={onClickDelete(index)}
          key={`todo_item_${index}`}
        />
      ))}
    </div>
  );
};

export default Main;
