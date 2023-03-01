import { ContextType, createRef, PureComponent, RefObject } from "react";
import { ClassCounterContext } from "../contexts/ClassCounterContext";
import { DisplayClass } from "./Display";

export default class CounterClass extends PureComponent {
  static contextType = ClassCounterContext;
  context!: ContextType<typeof ClassCounterContext>;
  // declare context: ContextType<typeof ClassCounterContext>;
  // forwardedRef = createRef<HTMLParagraphElement>();
  forwardedRef: RefObject<HTMLParagraphElement>;

  public constructor(props: {}) {
    super(props);
    this.forwardedRef = createRef();
  }

  public render() {
    const { counter, decreaseCounter, increaseCounter } = this.context;

    return (
      <>
        <DisplayClass content={`${counter}`} ref={this.forwardedRef} />
        <button onClick={() => increaseCounter(5)}>+</button>
        <button onClick={() => decreaseCounter(5)}>-</button>
        <button onClick={this.show100}>show100</button>
      </>
    );
  }

  private readonly show100 = () => {
    this.forwardedRef.current!.textContent = "100";
  };
}
