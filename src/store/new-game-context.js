import { createContext, useReducer } from "react";

const initValue = {
  initGameValue: {
    gameName: "",
    message: "",
    adminPassword: "",
  },
  initGame() {},
  questions: [],
  addQuestion() {},
  gameCode: 0,
  addGameCode() {},
  reset() {},
  restQuestions() {},
};

const newGameReducer = (state, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "INIT_GAME": {
      newState.initGameValue = action.payload;
      break;
    }
    case "ADD_QUESTION": {
      newState.questions.push(action.payload);
      break;
    }
    case "ADD_GAME_CODE": {
      newState.gameCode = action.payload;
      break;
    }
    case "RESET_QUESTIONS": {
      newState.questions.push(action.payload);
      break;
    }
    case "RESET": {
      return initValue;
    }
    default:
      break;
  }
  return newState;
};

const newGameContext = createContext(initValue);

export const NewGameContextProvider = (props) => {
  const [state, dispatch] = useReducer(newGameReducer, initValue);
  console.log(state.questions);
  return (
    <newGameContext.Provider
      value={{
        ...state,
        initGame(initGameValue) {
          dispatch({ type: "INIT_GAME", payload: initGameValue });
        },
        addQuestion(questions) {
          dispatch({ type: "ADD_QUESTION", payload: questions });
        },
        addGameCode(gameCode) {
          dispatch({ type: "ADD_GAME_CODE", payload: gameCode });
        },
        reset() {
          dispatch({ type: "RESET" });
        },
        restQuestions() {
          dispatch({ type: "RESET_QUESTIONS" });
        },
      }}
    >
      {props.children}
    </newGameContext.Provider>
  );
};

export default newGameContext;
