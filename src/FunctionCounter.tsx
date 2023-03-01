import { useRef } from "react";
import { useCounter } from "../utils/useCounter";
import { DisplayFunction } from "./Display";

const FunctionCounter = () => {
  const { state, dispatch, incrementAction } = useCounter();
  const displayRef = useRef<HTMLParagraphElement>(null!);

  const show100 = () => {
    displayRef.current.textContent = "100";
  };

  return (
    <>
      <DisplayFunction content={`${state.counter}`} ref={displayRef} />
      <button onClick={() => dispatch(incrementAction(5))}>+</button>
      <button onClick={() => dispatch({ payload: 5, type: "decrement" })}>
        -
      </button>
      <button onClick={show100}>show100</button>
    </>
  );
};

export default FunctionCounter;
