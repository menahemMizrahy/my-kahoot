import { createContext, useEffect, useReducer } from "react";
import { initValue, newGameReducer } from "./new-game-reducer";

const newGameContext = createContext(initValue);
export default newGameContext;

export const NewGameContextProvider = (props) => {
  const [newGameState, dispatch] = useReducer(newGameReducer, initValue, () => {
    const localData = JSON.parse(localStorage.getItem("newGameState"));
    return localData || initValue;
  });

  useEffect(() => {
    localStorage.setItem("newGameState", JSON.stringify(newGameState));
  }, [newGameState]);

  console.log(newGameState.questions);

  return (
    <newGameContext.Provider
      value={{
        ...newGameState,
        initGame(initGameValue) {
          dispatch({ type: "INIT_GAME", payload: initGameValue });
        },
        addQuestion(question) {
          dispatch({ type: "ADD_QUESTION", payload: question });
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
