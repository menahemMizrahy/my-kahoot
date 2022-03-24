import { createContext } from "react";

const newGameContext = createContext({
  gameName: "",
  changeGameName: () => {},
  message: "",
  changeMessage: () => {},
  adminPassword: "",
  changeAdminPassword: () => {},
  questions: [],
  change,
});
