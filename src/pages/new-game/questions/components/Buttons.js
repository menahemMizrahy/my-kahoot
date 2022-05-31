import { Button } from "@mui/material";

const Buttons = ({ finishHandler, enoughQuestions }) => {
  return (
    <>
      <Button type="submit" variant="contained" sx={{ m: "1rem" }}>
        next question
      </Button>
      {/* getting the error message when trying to finish when the button is disabled */}
      <span onClick={finishHandler}>
        <Button variant="contained" sx={{ m: "1rem" }} disabled={!enoughQuestions}>
          finish
        </Button>
      </span>
    </>
  );
};

export default Buttons;
