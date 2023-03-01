import { ClassCounterProvider } from "../contexts/ClassCounterContext";
import { CounterProvider } from "../contexts/CounterContext";
import CounterClass from "./ClassCounter";
import FunctionCounter from "./FunctionCounter";

import "./styles.css";

export default function App() {
  return (
    <CounterProvider>
      <ClassCounterProvider>
        <div className="App">
          <CounterClass />
          <FunctionCounter />
        </div>
      </ClassCounterProvider>
    </CounterProvider>
  );
}
