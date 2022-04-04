import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MyInput from "../../../../components/MyInput";
import useInput from "../../../../hooks/input-hook";
import BooleanQuestion from "./BooleanQuestion";
import OpenQuestionForm from "./OpenQuestionForm";

const QuestionForm = ({ isOpenQuestion, onSubmit }) => {
  const navigate = useNavigate();

  const inputValidate = (value) => value.trim().length;

  const question = useInput("", inputValidate);

  const formProps = {
    question,
    isOpenQuestion,
    onSubmit,
    navigate,
  };

  return (
    <div style={{ border: "1px solid lightGrey", padding: "1rem" }}>
      <Typography variant="h3" sx={{ mt: "2rem" }}>
        Question
      </Typography>
      <MyInput {...question} fullWidth />
      {isOpenQuestion && <OpenQuestionForm {...formProps} />}
      {!isOpenQuestion && <BooleanQuestion {...formProps} />}
    </div>
  );
};
export default QuestionForm;
