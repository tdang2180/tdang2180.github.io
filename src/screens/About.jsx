import React from "react";
import { AppBar, Grid, Typography, Toolbar, Box }  from "@mui/material";

const styles = {
  text: {
    fontFamily: "serif",
    color: "white",
    padding: "12px 25px 12px 25px",
    fontSize: "20px"
  } 
}

const Text = () => {
  return (
    <Typography sx={styles.text}>
      Hello! Welcome to my portfolio site 😁🧑‍💻 <br/>
      <br/>
      My name is Thanh Dang, and I am a second-year undergraduate studying computer science at Cal Poly Pomona. 
      I enjoy working out, cooking, photographing, listening to music, and coding. I first learned how to code in 
      high school from a computer science principles class, and I have been hooked ever since. Learning and experiencing 
      the joy of creating things that can benefit others has really motivated to continue my journey in becoming
      a better software engineer. 
      
      My goal as an aspiring software enginneer is to use my abilities to help assist our coummunity. 
      Whether it be developing a website or mobile application, I strive to make my works useful and beneficial to all users. <br/>  
      <br/>
      This portfolio site aims to showcase my experience and technical skills in full-stack software engineering/development. 
      Feel free to look around and explore! 
    </Typography>
  )
}

export default function About() {
  return(
    <Grid container bgcolor="#121212" border="solid" borderColor="white">
      <Text/>  
    </Grid>
  )
}