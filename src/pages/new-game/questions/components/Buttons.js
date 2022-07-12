import { Button } from "@mui/material";

const Buttons = ({ finishHandler, enoughQuestions, submitHandler }) => {
  return (
    <>
      <div style={{ display: "inline-block" }} onClick={submitHandler}>
        <Button variant="contained" sx={{ m: "1rem" }}>
          next question
        </Button>
      </div>

      <div style={{ display: "inline-block" }} onClick={finishHandler}>
        <Button variant="contained" sx={{ m: "1rem" }}>
          finish
        </Button>
      </div>
    </>
  );
};

export default Buttons;
