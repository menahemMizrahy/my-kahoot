import { useEffect } from "react";
import useInput from "../../../../../hooks/input-hook";

const inputValidate = (value) => !!value.trim().length;
// getting the props from the OpenQuestionForm
const useOpenQuestionForm = ({
  question,
  isOpenQuestion,
  onFinish,
  submitQuestion,
  setAreValuesValid,
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

  const areValuesValid =
    question.isValid && correctAnswerIsValid && answer1IsValid && answer2IsValid && answer3IsValid;
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
    onFinish(validateFileds, newQuestion, resetValues);
  };

  useEffect(() => {
    setAreValuesValid(areValuesValid);
  }, [areValuesValid, setAreValuesValid]);

  return {
    finishHandler,
    answer3,
    answer2,
    answer1,
    correctAnswer,
    areValuesValid,
    submitHandler,
  };
};

export default useOpenQuestionForm;
