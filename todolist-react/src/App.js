import Main from "./pages/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Detail } from "./pages/Detail";
import { useEffect, useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoListData, setTodoListData] = useState([]);
  const savedTodoListData = localStorage.getItem("todos");

  const saveTodoListData = () => {
    localStorage.setItem("todos", JSON.stringify(todoListData));
  };

  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  const onSubmitTodo = () => {
    if (todo === "") return;
    const newTodo = { id: Date.now(), title: todo, done: false };
    setTodoListData((prev) => [...prev, newTodo]);
    setTodo("");
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

  useEffect(() => {
    if (savedTodoListData !== null) {
      const parsedTodos = JSON.parse(savedTodoListData);
      setTodoListData(parsedTodos);
    }
  }, []);

  useEffect(() => {
    saveTodoListData();
  }, [todoListData]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Main
          todo={todo}
          todoListData={todoListData}
          onChangeTodo={onChangeTodo}
          onSubmitTodo={onSubmitTodo}
          onChangeCheckbox={onChangeCheckbox}
          onSubmitEdit={onSubmitEdit}
          onClickDelete={onClickDelete}
        />
      ),
    },
    {
      path: "/detail/:id",
      element: (
        <Detail
          onChangeCheckbox={onChangeCheckbox}
          onSubmitEdit={onSubmitEdit}
          onClickDelete={onClickDelete}
        />
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
