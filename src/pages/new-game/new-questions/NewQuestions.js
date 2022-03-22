import { Grid } from "@mui/material";

const NewQuestions = () => {
  let questionsCounter = 1;
  return (
    <Grid container>
      <Grid
        item
        xs={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            borderRadius: "50%",
            backgroundColor: "grey",
            height: "6em",
            width: "6em",
          }}
        >
          {`# ${questionsCounter}`}
        </div>
      </Grid>
      <Grid item xs={8}>
        center
      </Grid>
      <Grid item xs={2}>
        right
      </Grid>
    </Grid>
  );
};

export default NewQuestions;
