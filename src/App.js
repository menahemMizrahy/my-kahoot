import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import HomePage from "./pages/start/HomePage";
import NewGame from "./pages/new-game/NewGame";
import NewQuestions from "./pages/new-game/questions/NewQuestions";
import NewGameFinish from "./pages/new-game/finish/NewGameFinish";
import MyPaper from "./layout/MyPaper";

function App() {
  return (
    <MyPaper>
      <Routes>
        <Route path="/*" element={<Navigate to="/home" />} />

        <Route path="/home" element={<HomePage />} />

        <Route path="/new-game/*">
          <Route path="" element={<NewGame />} />
          <Route path="questions" element={<NewQuestions />} />
          <Route path="finish" element={<NewGameFinish />} />
        </Route>

        <Route path="/wait" />

        <Route path="/game">
          <Route path="wait" />
          <Route path="finish" />
        </Route>

        <Route path="/admin">
          <Route path="wait" />
          <Route path="game">
            <Route path="wait" />
            <Route path="finish" />
          </Route>
        </Route>
      </Routes>
    </MyPaper>
  );
}

export default App;
