import TodoInputContext from "../TodoInputContext";
import Todo from "./Todo";
import { useContext, useEffect } from "react";

export default function TodoArea() {
  const { todos } = useContext(TodoInputContext);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const todoComponents = todos.map((todo) => {
    return (
      <Todo key={todo.id} todo={todo.todo} id={todo.id} isDone={todo.isDone} />
    );
  });

  return (
    <section className="flex mx-5 my-5 p-5 flex-wrap">{todoComponents}</section>
  );
}
