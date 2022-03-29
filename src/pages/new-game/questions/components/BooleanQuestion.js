import { Typography } from "@mui/material";
import { forwardRef } from "react";

const BooleanQuestion = forwardRef((props, ref) => {
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
            ref={ref}
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
});

export default BooleanQuestion;
