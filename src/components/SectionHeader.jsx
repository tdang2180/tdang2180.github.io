import React from "react";
import { Grid, Typography }  from "@mui/material";

const styles = {
  header: {
    bgcolor: "grey",
    padding: "12px 25px 12px 0px",
  },
  headerText: {
    fontFamily: "serif",
    color: "black",
    fontSize: "23px",
    ml: "25px"
  },
}

export default function SectionHeader ({headerName}) {
  return (
    <Grid item xs={12} sx={styles.header}>
      <Typography sx={styles.headerText}>{headerName}</Typography>
    </Grid>
  )
}