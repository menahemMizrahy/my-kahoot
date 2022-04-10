import { Button, Grid } from "@mui/material";
import { useContext, useState } from "react";
import newGameContext from "../../../store/new-game-context";
import QuestionForm from "./components/QuestionForm";
import QuestionsCounterBadge from "./components/QuestionsCounterBadge";

const NewQuestions = () => {
  const newGameCtx = useContext(newGameContext);

  const [isOpenQuestion, setIsOpenQuestion] = useState(true);
  const questionTypeHandler = () => {
    setIsOpenQuestion(!isOpenQuestion);
  };
  const submitHandler = (question) => newGameCtx.addQuestion(question);

  return (
    <Grid container sx={{ height: "80vh" }}>
      <Grid
        item
        xs={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <QuestionsCounterBadge />
        <Button variant="contained" onClick={questionTypeHandler}>
          Question type
        </Button>
      </Grid>
      <Grid
        item
        xs={8}
        sx={{
          textAlign: "center",
          p: "1rem",
        }}
      >
        <QuestionForm
          isOpenQuestion={isOpenQuestion}
          onSubmit={submitHandler}
        />
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};

export default NewQuestions;
