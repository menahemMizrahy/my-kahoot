import { Typography } from "@mui/material";
import MyInput from "../../../../components/MyInput";
import useInput from "../../../../hooks/input-hook";

const inputValidate = (value) => value.trim().length;

const OpenQuestionForm = () => {
  const correctAnswer = useInput("", inputValidate);
  const answer1 = useInput("", inputValidate);
  const answer2 = useInput("", inputValidate);
  const answer3 = useInput("", inputValidate);
  return (
    <form>
      <Typography variant="h3" sx={{ mt: "2rem" }}>
        Correct Answer
      </Typography>
      <MyInput {...correctAnswer} fullWidth />
      <Typography variant="h3" sx={{ mt: "2rem" }}>
        The rest...
      </Typography>
      <MyInput {...answer1} fullWidth />
      <MyInput {...answer2} fullWidth />
      <MyInput {...answer3} fullWidth />
    </form>
  );
};

export default OpenQuestionForm;
