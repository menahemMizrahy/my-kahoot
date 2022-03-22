import { Button, Grid } from "@mui/material";

const NewQuestions = () => {
  let questionsCounter = 1;
  return (
    <Grid container sx={{ height: "80vh" }}>
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {`# ${questionsCounter}`}
        </div>
        <div>
          <Button variant="contained">next question</Button>
          <Button variant="contained">finish</Button>
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
