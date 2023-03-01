import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

// export const useCounter = () => {
//   const data = useContext(CounterContext);

//   if (!data) {
//     throw new Error(
//       "Hook useCounter powinien być zagnieżdżony w CounterProvider"
//     );
//   }

//   const { state, dispatch, incrementAction } = data;

//   return { state, dispatch, incrementAction };
// };

export const useCounter = () => useContext(CounterContext);
