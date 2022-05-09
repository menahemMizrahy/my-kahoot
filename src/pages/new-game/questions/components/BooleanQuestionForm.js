import { Button, Typography } from "@mui/material";
import useBooleanQuestionForm from "./booleanQuestionForm-hook";

const BooleanQuestionForm = (props) => {
  const {
    submitHandler,
    checked,
    answerCheckedHandler,
    answerError,
    validateFileds,
    finishHandler,
  } = useBooleanQuestionForm(props);
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
    </form>
  );
};

export default BooleanQuestionForm;
