import { useEffect } from "react";
import useInput from "../../../../../hooks/input-hook";

const inputValidate = (value) => !!value.trim().length;

const useOpenQuestionForm = ({
  isOpenQuestion,
  finishQuestions,
  submitQuestion,
  setAreAnswersValid,
}) => {
  const {
    resetInput: resetCorrectAnswer,
    valueIsValid: correctAnswerIsValid,
    ...correctAnswer
  } = useInput("", inputValidate, true);
  const {
    resetInput: resetAnswer1,
    valueIsValid: answer1IsValid,
    ...answer1
  } = useInput("", inputValidate, true);
  const {
    resetInput: resetAnswer2,
    valueIsValid: answer2IsValid,
    ...answer2
  } = useInput("", inputValidate, true);
  const {
    resetInput: resetAnswer3,
    valueIsValid: answer3IsValid,
    ...answer3
  } = useInput("", inputValidate, true);

  //the current question to be submited to the context
  const newQuestion = {
    isOpenQuestion,
    correctAnswer: correctAnswer.value,
    rest: [answer1.value, answer2.value, answer3.value],
  };

  //setting the error state when trying to submit without having the valid values
  const validateFileds = () => {
    correctAnswer.onBlur();
    answer1.onBlur();
    answer2.onBlur();
    answer3.onBlur();
  };

  // reset the form after submiting
  const resetValues = () => {
    resetAnswer1();
    resetAnswer2();
    resetAnswer3();
    resetCorrectAnswer();
  };

  const submitHandler = () => {
    submitQuestion(validateFileds, newQuestion, resetValues);
  };

  const finishHandler = () => {
    finishQuestions(validateFileds, newQuestion, resetValues);
  };

  const areValuesValid = correctAnswerIsValid && answer1IsValid && answer2IsValid && answer3IsValid;
  useEffect(() => {
    setAreAnswersValid(areValuesValid);
  }, [areValuesValid, setAreAnswersValid]);

  return {
    finishHandler,
    answer3,
    answer2,
    answer1,
    correctAnswer,
    submitHandler,
  };
};

export default useOpenQuestionForm;
