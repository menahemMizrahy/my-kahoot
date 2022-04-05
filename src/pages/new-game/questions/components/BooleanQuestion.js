import { useState } from "react";
import { Button, Typography } from "@mui/material";

const BooleanQuestion = ({ question, isOpenQuestion, onSubmit, navigate }) => {
  const [answer, setAnswer] = useState(null);
  const [answerError, setAnswerError] = useState(false);

  const validateFileds = () => {
    question.onBlur();
    setAnswerError(answer === null);
  };

  const answerCheckedHandler = (event) => {
    setAnswerError(false);
    setAnswer(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!answerError && !question.error) {
      onSubmit({
        question: question.value,
        isOpenQuestion,
        correctAnswer: answer,
      });
    }
  };

  const finishHandler = () => {
    navigate("../finish");
  };

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
        onChange={answerCheckedHandler}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <label htmlFor="true" style={{ color: answerError && "red" }}>
            True
          </label>
          <input
            type="radio"
            name="boolean-answer"
            value="true"
            style={{
              height: "2rem",
              width: "2rem",
              margin: "2rem",
            }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label htmlFor="false" style={{ color: answerError && "red" }}>
            False
          </label>
          <input
            type="radio"
            name="boolean-answer"
            value="false"
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

export default BooleanQuestion;
