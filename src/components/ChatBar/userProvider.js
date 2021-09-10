import { createContext, useReducer, useContext } from "react";

const initialState = null;
const dispatchContext = createContext();
const stateContext = createContext();

export default function UserProvider(props) {
  const [state, dispatch] = useReducer(userRed, initialState);

  return (
    <stateContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>
        {props.children}
      </dispatchContext.Provider>
    </stateContext.Provider>
  );
}

export function useLogUser() {
  return useContext(stateContext);
}

export function useSetLogUser() {
  return useContext(dispatchContext);
}

export function userRed(state, action) {
  switch (action.type) {
    case "saveUsers": {
      const logUser = action.payload;
      console.log(action);
      return logUser;
    }
  }
}
