import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    case "setCount":
      return action.payload;
    default:
      return state;
  }
}

function DateCounter() {
  const initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;
  // const [step, setStep] = useState(1);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const decrease = function () {
    dispatch({ type: "decrease" });
  };

  const increase = function () {
    dispatch({ type: "increase" });
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
  };

  const reset = function () {
    dispatch({ type: "setCount", payload: 0 }); // Fixed reset action
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={decrease}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={increase}>+</button>
      </div>
      <p>{date.toDateString()}</p>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default DateCounter;
