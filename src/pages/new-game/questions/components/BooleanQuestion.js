import { Button, Typography } from "@mui/material";
import useBooleanQuestion from "./booleanQuestion-hook";

const BooleanQuestion = (props) => {
  const {
    submitHandler,
    checked,
    answerCheckedHandler,
    answerError,
    validateFileds,
    finishHandler,
  } = useBooleanQuestion(props);
  return (
    <form onSubmit={submitHandler}>
      <Typography variant="h3" sx={{ m: "2rem" }}>
        Choose your answer
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <label htmlFor="trueAnswer" style={{ color: answerError && "red" }}>
            True
          </label>
          <input
            type="radio"
            name="boolean-answer"
            value="trueAnswer"
            checked={checked.trueAnswer}
            onChange={answerCheckedHandler}
            style={{
              height: "2rem",
              width: "2rem",
              margin: "2rem",
            }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label htmlFor="falseAnswer" style={{ color: answerError && "red" }}>
            False
          </label>
          <input
            type="radio"
            name="boolean-answer"
            value="falseAnswer"
            checked={checked.falseAnswer}
            onChange={answerCheckedHandler}
            style={{ height: "2rem", width: "2rem", margin: "2rem" }}
          />
        </div>
      </div>
      <Button
        type="submit"
        variant="contained"
        sx={{ m: "1rem" }}
        onClick={validateFileds}
      >
        next question
      </Button>
      <Button variant="contained" sx={{ m: "1rem" }} onClick={finishHandler}>
        finish
      </Button>
      {props.enoughQuestionsError && (
        <p style={{ color: "red" }}>Not Enough Questions!</p>
      )}
    </form>
  );
};

export default BooleanQuestion;
