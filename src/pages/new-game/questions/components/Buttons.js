import { Button } from "@mui/material";

const Buttons = ({ finishHandler, enoughQuestions, areValuesValid, submitHandler }) => {
  return (
    <>
      <div style={{ display: "inline-block" }} onClick={submitHandler}>
        <Button variant="contained" sx={{ m: "1rem" }} disabled={!areValuesValid}>
          next question
        </Button>
      </div>

      {/* getting the error message when trying to finish when the button is disabled */}
      <div style={{ display: "inline-block" }} onClick={finishHandler}>
        <Button variant="contained" sx={{ m: "1rem" }} disabled={!enoughQuestions}>
          finish
        </Button>
      </div>
    </>
  );
};

export default Buttons;
