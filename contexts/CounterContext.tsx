import { createContext, Dispatch, FC, useReducer } from "react";

type InitialState = {
  counter: number;
};

type IncrementCounterAction = {
  type: "increment";
  payload: number;
};

type DecrementCounterAction = {
  type: "decrement";
  payload: number;
};

type ActionTypes = IncrementCounterAction | DecrementCounterAction;

type CounterContextType = {
  dispatch: Dispatch<ActionTypes>;
  incrementAction: (payload: number) => IncrementCounterAction;
  state: InitialState;
};

const reducer = (state: InitialState, action: ActionTypes) => {
  switch (action.type) {
    case "decrement":
      return { ...state, counter: state.counter - action.payload };
    case "increment":
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};

const incrementAction = (payload = 1): IncrementCounterAction => ({
  type: "increment",
  payload
});

export const CounterContext = createContext<CounterContextType>(null!);

export const CounterProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <CounterContext.Provider value={{ dispatch, incrementAction, state }}>
      {children}
    </CounterContext.Provider>
  );
};
