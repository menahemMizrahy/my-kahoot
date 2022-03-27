import { Typography } from "@mui/material";
import MyInput from "../../../../components/MyInput";
import useInput from "../../../../hooks/input-hook";

const OpenQuestion = (props) => {
  const correctAnswer = useInput("");
  const answer1 = useInput("");
  const answer2 = useInput("");
  const answer3 = useInput("");

  return (
    <div>
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
    </div>
  );
};

export default OpenQuestion;
