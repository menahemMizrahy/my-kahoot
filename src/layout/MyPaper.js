import { Paper, Grid } from "@mui/material";
const MyPaper = (props) => {
  return (
    <Grid
      container
      sx={{
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Paper
        style={{
          backgroundColor: "#FFF8FE",
          padding: "10px",
          minHeight: "80vh",
          minWidth: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {props.children}
      </Paper>
    </Grid>
  );
};

export default MyPaper;
