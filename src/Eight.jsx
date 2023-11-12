import { useState } from "react";
export default function Eight() {
  const [input, setInput] = useState(" ");
  const [todos, setTodos] = useState([]);

  const addBtn = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const removeBtn = (index) => {
    const upDatedTodo = [...todos];
    upDatedTodo.splice(index, 1);
    setTodos(upDatedTodo);
  };

  return (
    <div>
      <input
        className="border-solid border-2 border-black"
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="px-5 py-1 text-white bg-blue-600 rounded"
        onClick={addBtn}
      >
        Add
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              onClick={removeBtn}
              className="px-4 py-1 text-red-500 bg-blue-600 rounded"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
