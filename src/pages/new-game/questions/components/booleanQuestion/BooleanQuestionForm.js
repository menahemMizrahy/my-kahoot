import { Typography } from "@mui/material";
import Buttons from "../Buttons";
import useBooleanQuestionForm from "./booleanQuestionForm-hook";

const BooleanQuestionForm = ({ enoughQuestions, ...props }) => {
  const {
    submitHandler,
    checked,
    areValuesValid,
    answerCheckedHandler,
    answerError,
    finishHandler,
  } = useBooleanQuestionForm(props);

  return (
    <form>
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
      <Buttons {...{ enoughQuestions, finishHandler, areValuesValid, submitHandler }} />
    </form>
  );
};

export default BooleanQuestionForm;
