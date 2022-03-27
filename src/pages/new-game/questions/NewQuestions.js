import { Button, Grid } from "@mui/material";
import { useRef, useState } from "react";
import QuestioForm from "./components/QuestionForm";
import QuestionsCounterBadge from "./components/QuestionsCounterBadge";

const NewQuestions = () => {
  const trueAnswerRef = useRef();

  const [openQuestion, setOpenQuestion] = useState(true);
  const questionTypeHandler = () => {
    setOpenQuestion(!openQuestion);
  };

  const aa = () => {
    console.log(!!trueAnswerRef.current.checked);
  };

  let questionsCounter = 1;
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
        <QuestionsCounterBadge questionsCounter={questionsCounter} />
        <Button variant="contained" onClick={questionTypeHandler}>
          Question type
        </Button>
        <Button variant="contained" sx={{ m: "1rem" }}>
          finish
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
        <QuestioForm openQuestion={openQuestion} />
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};

export default NewQuestions;
