import { useState } from "react";

function TwentyEight() {
  const [state, setState] = useState({
    count: 0,
    text: "Initial Text",
    isActive: false,
  });

  const incrementCount = () => {
    setState({ ...state, count: state.count + 1 });
  };
  const changeText = () => {
    setState({ ...state, text: "కొత్త వచనం" });
  };
  const toggleButton = () => {
    setState({ ...state, isActive: !state.isActive });
  };

  return (
    <div>
      <h1>Multiple States</h1>
      <p>Count: {state.count}</p>
      <p>Text: {state.text}</p>
      <p>Active: {state.isActive ? "YES" : "NO"}</p>

      <button
        onClick={incrementCount}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        INCREMENT
      </button>
      <button
        onClick={changeText}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        CHANGE TEXT
      </button>
      <button
        onClick={toggleButton}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        TOGGLE
      </button>
    </div>
  );
}

export default TwentyEight;
