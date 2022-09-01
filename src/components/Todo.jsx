import { useContext } from "react";
import TodoInputContext from "../TodoInputContext";

export default function Todo({ todo, id, isDone }) {
  const { setTodos } = useContext(TodoInputContext);

  const styles = {
    textDecoration: isDone ? "line-through red 2px" : "none",
  };

  const handleRemoveTodo = () => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleIsDone = () => {
    setTodos((todos) => {
      return todos.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      });
    });
  };

  return (
    <article className="p-3 bg-gray-600 my-3 mx-5 rounded-lg text-xl flex-initial text-white drop-shadow-sm h-fit">
      <div className="flex justify-between items-center">
        <span style={styles}>{todo}</span>
        <span onClick={handleIsDone} className="pl-5 cursor-pointer">
          ✔️
        </span>
        <span onClick={handleRemoveTodo} className="cursor-pointer">
          ❌
        </span>
      </div>
    </article>
  );
}
