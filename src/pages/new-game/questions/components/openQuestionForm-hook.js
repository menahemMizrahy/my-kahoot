import useInput from "../../../../hooks/input-hook";

const inputValidate = (value) => !!value.trim().length;

const useOpenQuestionForm = ({
  question,
  isOpenQuestion,
  onFinish,
  submitQuestion,
  resetQuestion,
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

  const newQuestion = {
    question: question.value,
    isOpenQuestion,
    correctAnswer: correctAnswer.value,
    rest: [answer1.value, answer2.value, answer3.value],
  };

  const validateFileds = () => {
    question.onBlur();
    correctAnswer.onBlur();
    answer1.onBlur();
    answer2.onBlur();
    answer3.onBlur();
  };
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
    onFinish(areValuesValid, validateFileds, newQuestion, resetValues);
  };

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
