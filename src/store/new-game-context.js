import { createContext, useReducer } from "react";

const initValue = {
  gameName: "",
  message: "",
  adminPassword: "",
  questions: [],
  gameCode: 0,
};

const newGameReducer = (state, action) => {
  const newState = { ...state };
  if (action.type === "RESET") {
    return initValue;
  }
  if (action.type === "RESET_QUESTIONS") {
    newState.questions = [];
    return newState;
  }
  newState[action.type] = action.payload;
  return newState;
};
const newGameContext = createContext(initValue);

export const NewGameContextProvider = (props) => {
  const [state, dispatch] = useReducer(newGameReducer, initValue);

  return (
    <newGameContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {props.children}
    </newGameContext.Provider>
  );
};

export default newGameContext;
