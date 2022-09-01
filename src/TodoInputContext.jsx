import { createContext, useState } from "react";

const TodoInputContext = createContext();

export function TodoInputProvider({ children }) {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  const addTodo = (id, todo, isDone) => {
    setTodos((prevTodos) => [...prevTodos, { id, todo, isDone }]);
  };

  return (
    <TodoInputContext.Provider value={{ todos, addTodo, setTodos }}>
      {children}
    </TodoInputContext.Provider>
  );
}

export default TodoInputContext;
