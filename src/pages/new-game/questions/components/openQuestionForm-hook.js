import useInput from "../../../../hooks/input-hook";

const inputValidate = (value) => value.trim().length;

const useOpenQuestionForm = ({
  question,
  isOpenQuestion,
  onSubmit,
  onFinish,
  resetQuestion,
}) => {
  const { resetInput: resetCorrectAnswer, ...correctAnswer } = useInput(
    "",
    inputValidate
  );
  const { resetInput: resetAnswer1, ...answer1 } = useInput("", inputValidate);
  const { resetInput: resetAnswer2, ...answer2 } = useInput("", inputValidate);
  const { resetInput: resetAnswer3, ...answer3 } = useInput("", inputValidate);

  const validateValues = () => {
    return (
      inputValidate(question.value) &&
      inputValidate(correctAnswer.value) &&
      inputValidate(answer1.value) &&
      inputValidate(answer2.value) &&
      inputValidate(answer3.value)
    );
  };
  const validateFileds = (submiting) => {
    question.onBlur();
    correctAnswer.onBlur();
    answer1.onBlur();
    answer2.onBlur();
    answer3.onBlur();
    submiting();
  };

  const submiting = () => {
    if (
      question.error ||
      correctAnswer.error ||
      answer1.error ||
      answer2.error ||
      answer3.error
    ) {
      return;
    }
    onSubmit({
      question: question.value,
      isOpenQuestion,
      correctAnswer: correctAnswer.value,
      rest: [answer1.value, answer2.value, answer3.value],
    });
    resetAnswer1();
    resetAnswer2();
    resetAnswer3();
    resetCorrectAnswer();
    resetQuestion();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    validateFileds(submiting);
  };

  const finishHandler = () => {
    onFinish(validateValues, validateFileds, submiting);
  };

  return {
    finishHandler,
    validateFileds,
    answer3,
    answer2,
    answer1,
    correctAnswer,
    submitHandler,
  };
};

export default useOpenQuestionForm;
