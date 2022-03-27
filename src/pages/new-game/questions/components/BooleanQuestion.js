import { Typography } from "@mui/material";
import { useRef } from "react";

const BooleanQuestion = (props) => {
  const trueAnswerRef = useRef;
  return (
    <>
      <Typography variant="h3" sx={{ m: "2rem" }}>
        Choose your answer
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <label htmlFor="true">True</label>
          <input
            type="radio"
            name="boolean-answer"
            id="true"
            style={{ height: "2rem", width: "2rem", margin: "2rem" }}
            ref={trueAnswerRef}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label htmlFor="false">False</label>
          <input
            type="radio"
            name="boolean-answer"
            id="false"
            style={{ height: "2rem", width: "2rem", margin: "2rem" }}
          />
        </div>
      </div>
    </>
  );
};

export default BooleanQuestion;
