import "./index.css";

const Input = ({ onSubmitTodo, onChangeTodo, todo }) => {
  return (
    <div>
      <form onSubmit={onSubmitTodo}>
        <input
          maxLength="25"
          className="input"
          value={todo}
          onChange={onChangeTodo}
          type="text"
          placeholder="Todo"
        />
      </form>
    </div>
  );
};

export default Input;
