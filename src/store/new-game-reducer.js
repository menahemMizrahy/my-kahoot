export const initValue = {
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

export const newGameReducer = (state, action) => {
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
