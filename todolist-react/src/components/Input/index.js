import "./index.css";

const Input = ({ onSubmitTodo, onChangeTodo, todo }) => {
  return (
    <div>
      <input
        maxLength="25"
        className="input"
        value={todo}
        onChange={onChangeTodo}
        type="text"
        placeholder="TODO"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSubmitTodo();
          }
        }}
      />
    </div>
  );
};

export default Input;
