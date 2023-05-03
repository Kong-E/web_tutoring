import { useState } from "react";
import TodoItem from "../../components/TodoItem";
import Input from "../../components/Input";
import "./index.css";

const Main = ({
  todo,
  todoListData,
  onChangeTodo,
  onSubmitTodo,
  onChangeCheckbox,
  onSubmitEdit,
  onClickDelete,
}) => {
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
