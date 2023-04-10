import { useState } from "react";

const Input = ({ onSubmitTodo, onChangeTodo, todo }) => {
  return (
    <div>
      <form onSubmit={onSubmitTodo}>
        <input
          value={todo}
          onChange={onChangeTodo}
          type="text"
          placeholder="Write a todo"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Input;
