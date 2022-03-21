import { Grid } from "@mui/material";

const NewQuestions = () => {
  return (
    <Grid container>
      <Grid item xs={1}>
        left
      </Grid>
      <Grid item xs={10}>
        center
      </Grid>
      <Grid item xs={1}>
        right
      </Grid>
    </Grid>
  );
};

export default NewQuestions;
