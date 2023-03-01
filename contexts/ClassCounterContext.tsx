import { createContext, PureComponent } from "react";

type ClassCounterType = {
  counter: number;
  decreaseCounter: (value: number) => void;
  increaseCounter: (value: number) => void;
};

type ClassCounterProviderState = {
  counter: number;
};

export const ClassCounterContext = createContext<ClassCounterType>(null!);

export class ClassCounterProvider extends PureComponent<
  {},
  ClassCounterProviderState
> {
  readonly state: ClassCounterProviderState = {
    counter: 0
  };

  public render() {
    return (
      <ClassCounterContext.Provider
        value={{
          counter: this.state.counter,
          decreaseCounter: this.decreaseCounter,
          increaseCounter: this.increaseCounter
        }}
      >
        {this.props.children}
      </ClassCounterContext.Provider>
    );
  }

  public readonly increaseCounter = (value = 1) =>
    this.setState((prev) => ({
      counter: prev.counter + value
    }));

  public readonly decreaseCounter = (value = 1) =>
    this.setState((prev) => ({
      counter: prev.counter - value
    }));
}
