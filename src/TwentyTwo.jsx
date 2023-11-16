import { useReducer } from "react";
import { useState } from "react";

export default function TwentyOne() {
  const [taskText, setTaskText] = useState("");
  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TASK":
        return [
          ...state,
          { id: Date.now(), text: action.payload, completed: false },
        ];
      case "REMOVE":
        return state.filter((task) => task.id !== action.payload);
      case "TOGGLE_TYPE":
        return state.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        );
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(taskReducer, []);

  function addTask() {
    dispatch({ type: "ADD_TASK", payload: taskText });
    setTaskText("");
  }
  //console.log(state)

  return (
    <div>
      <p>TO DO APP</p>
      <input
        type="text"
        value={taskText}
        placeholder="Add new task..."
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={addTask}>ADD TASK</button>
      <ul>
        {state.map((eachTask) => (
          <li key={eachTask.id}>
            <span
              style={{
                textDecoration: eachTask.completed ? "line-through" : "none",
              }}
              onClick={() =>
                dispatch({ type: "TOGGLE_TYPE", payload: eachTask.id })
              }
            >
              {eachTask.text}
            </span>
            <button
              onClick={() => dispatch({ type: "REMOVE", payload: eachTask.id })}
            >
              REMOVE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
