import { useContext } from "react";
import newGameContext from "../../../../store/new-game-context";

const QuestionsCounterBadge = () => {
  const newGameCtx = useContext(newGameContext);
  return (
    <div
      style={{
        borderRadius: "50%",
        backgroundColor: "grey",
        height: "6em",
        width: "6em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {`# ${newGameCtx.questions.length + 1}`}
    </div>
  );
};

export default QuestionsCounterBadge;
