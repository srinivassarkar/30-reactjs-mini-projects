import { useReducer } from "react";

const initialState = 0;

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const TwentyTwo = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <p>Counter App</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      {state}
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <p onClick={() => dispatch({ type: "RESET" })}>Reset</p>
    </div>
  );
};

export default TwentyTwo;
