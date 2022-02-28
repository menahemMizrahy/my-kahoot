import { Routs, Route } from "react-router-dom";

function App() {
  return (
    <Routs>
      <Route path="/" />
      <Route path="/new-game">
        <Route path="/questions" />
        <Route path="/finish" />
      </Route>
      <Route path="/game">
        <Route path="/questions" />
        <Route path="/wait" />
        <Route path="/finish" />
      </Route>
      <Route path="/admin">
        <Route path="/game">
          <Route path="/questions" />
          <Route path="/wait" />
          <Route path="/finish" />
        </Route>
      </Route>
    </Routs>
  );
}

export default App;
