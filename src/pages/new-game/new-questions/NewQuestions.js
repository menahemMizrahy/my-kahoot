import { Button, Grid, Typography } from "@mui/material";
import { useRef, useState } from "react";
import MyInput from "../../../components/MyInput";
import useInput from "../../../hooks/input-hook";

const NewQuestions = () => {
  const question = useInput("");
  const correctAnswer = useInput("");
  const answer1 = useInput("");
  const answer2 = useInput("");
  const answer3 = useInput("");

  const trueAnswerRef = useRef();
  const falseAnswerRef = useRef();

  const [openQuestion, setOpenQuestion] = useState(false);
  const questionTypeHandler = () => {
    setOpenQuestion(!openQuestion);
  };

  const aa = () => {
    console.log(trueAnswerRef.current.checked);
    console.log(falseAnswerRef.current.checked);
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
          {`# ${questionsCounter}`}
        </div>
        <Button variant="contained" onClick={questionTypeHandler}>
          Question type
        </Button>
        <div>
          <Button variant="contained" sx={{ m: "1rem" }} onClick={aa}>
            next question
          </Button>
          <Button variant="contained" sx={{ m: "1rem" }}>
            finish
          </Button>
        </div>
      </Grid>
      <Grid
        item
        xs={8}
        sx={{
          textAlign: "center",
          p: "1rem",
        }}
      >
        <form>
          <Typography variant="h3" sx={{ mt: "2rem" }}>
            Question
          </Typography>
          <MyInput {...question} fullWidth />
          {openQuestion && (
            <div>
              <Typography variant="h3" sx={{ mt: "2rem" }}>
                Correct Answer
              </Typography>
              <MyInput {...correctAnswer} fullWidth />
              <Typography variant="h3" sx={{ mt: "2rem" }}>
                The rest...
              </Typography>
              <MyInput {...answer1} fullWidth />
              <MyInput {...answer2} fullWidth />
              <MyInput {...answer3} fullWidth />
            </div>
          )}

          {!openQuestion && (
            <>
              <Typography variant="h3" sx={{ mt: "2rem" }}>
                Choose your answer
              </Typography>
              <div>
                <input type="radio" name="boolean-answer" ref={trueAnswerRef} />
                <input
                  type="radio"
                  ref={falseAnswerRef}
                  name="boolean-answer"
                />
              </div>
            </>
          )}
        </form>
      </Grid>
      <Grid item xs={2}>
        right
      </Grid>
    </Grid>
  );
};

export default NewQuestions;
