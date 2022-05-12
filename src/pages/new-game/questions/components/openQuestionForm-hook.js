import { useEffect } from "react";
import useInput from "../../../../hooks/input-hook";

const inputValidate = (value) => !!value.trim().length;
// getting the props from the OpenQuestionForm
const useOpenQuestionForm = ({
  question,
  isOpenQuestion,
  onFinish,
  submitQuestion,
  resetQuestion,
  setAreValuesValid,
}) => {
  const { resetInput: resetCorrectAnswer, ...correctAnswer } = useInput(
    "",
    inputValidate
  );
  const { resetInput: resetAnswer1, ...answer1 } = useInput("", inputValidate);
  const { resetInput: resetAnswer2, ...answer2 } = useInput("", inputValidate);
  const { resetInput: resetAnswer3, ...answer3 } = useInput("", inputValidate);

  const areValuesValid =
    inputValidate(question.value) &&
    inputValidate(correctAnswer.value) &&
    inputValidate(answer1.value) &&
    inputValidate(answer2.value) &&
    inputValidate(answer3.value);
  //the current question to be submited to the context
  const newQuestion = {
    question: question.value,
    isOpenQuestion,
    correctAnswer: correctAnswer.value,
    rest: [answer1.value, answer2.value, answer3.value],
  };
  //setting the error state when trying to submit without having the valid values
  const validateFileds = () => {
    question.onBlur();
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
    resetQuestion();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!areValuesValid) {
      validateFileds();
      return;
    }
    submitQuestion(newQuestion, resetValues);
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
    submitHandler,
  };
};

export default useOpenQuestionForm;
