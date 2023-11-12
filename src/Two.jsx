import { useState } from "react";
function Two() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="text-center">
      <button
        className="px-6 py-2 text-white bg-blue-600 rounded-full"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
      <span className="text-3xl black font-bold  text-center">{counter}</span>
      <button
        className="px-6 py-2 text-white bg-blue-600 rounded-full"
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
    </div>
  );
}

export default Two;
