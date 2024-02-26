import React from "react";
import { AppBar, Grid, Typography, Toolbar } from "@mui/material";

const styles = {
  text: {
    fontFamily: "serif",
    color: "#C7C6C1",
    ":hover": {
      color: "#2B547E",
      textDecoration: "underline",
      textDecorationColor: "#0A2472",
    },
  },
};
export default function Header() {
  const handleAboutMe = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProjects = () => {
    window.scrollTo({ top: 320, behavior: "smooth" });
  };

  const handleContact = () => {
    window.scrollTo({ top: 3000, behavior: "smooth" });
  };

  return (
    <AppBar sx={{ backgroundColor: "black" }} position="sticky" elevation={0}>
      <Toolbar>
        <Typography variant="h4" fontFamily="serif">
          Thanh
        </Typography>
        <Grid container justifyContent="right" gap="50px">
          <Typography sx={styles.text} variant="h5" onClick={handleAboutMe}>
            About Me
          </Typography>
          <Typography variant="h5" sx={styles.text} onClick={handleProjects}>
            Projects
          </Typography>
          <Typography variant="h5" sx={styles.text} onClick={handleContact}>
            Contact
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
