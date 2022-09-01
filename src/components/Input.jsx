import { useContext, useState } from "react";
import TodoInputContext from "../TodoInputContext";
import { nanoid } from "nanoid";

export default function Input() {
  const { addTodo } = useContext(TodoInputContext);

  const [todo, setTodo] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo(nanoid(), todo, false);
    setTodo("");
  };

  return (
    <form
      onSubmit={handleAddTodo}
      className="input-area flex pt-12 place-content-center"
    >
      <input
        name="todo"
        placeholder="enter your todo"
        value={todo}
        className="p-2 text-xl rounded-lg mr-5 w-2/5 border-2 border-gray-400 shadow-sm"
        type="text"
        onChange={(e) => setTodo((prev) => e.target.value)}
      />
      <button
        type="submit"
        className="bg-gray-500 p-2 rounded-lg text-xl text-white w-20"
      >
        Add
      </button>
    </form>
  );
}
