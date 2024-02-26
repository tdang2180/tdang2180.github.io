import React from "react";
import { AppBar, Grid, Typography, Toolbar, Box, Stack, Divider }  from "@mui/material";
import SectionHeader from "../components/SectionHeader";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const styles = {
  text: {
    fontFamily: "serif",
    color: "white",
    fontSize: "18px",
  },
}

const ContactBody = () => {
  const handleGitHub = () => {
    window.open("https://github.com/tdang2180")
  }
  
  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/thanhdang1")
  }

  return(
    <Grid item container id="contact_body" justifyContent="center" mb="25px" >
      <Grid item container xs="4">
        <Typography style={styles.text}>
          Phone Number: (626) 493 - 1853 <br/>
          Personal Email: tdang2180@gmail.com <br/>
          School Email: ttdang@cpp.edu
        </Typography>
      </Grid>

      <Grid item container gap="5px" xs="3">
        <Grid item xs="12">
          <Typography style={styles.text} display="flex" alignItems="center" gap="10px">
            You can check out my GitHub:          
            <GitHubIcon color="primary" fontSize="large" onClick={handleGitHub}/>
          </Typography>          
        </Grid>

          <Typography style={styles.text} display="flex" alignItems="center" gap="10px">
            Connect with me on LinkedIn:          
            <LinkedInIcon color="primary" fontSize="large" onClick={handleLinkedIn}/>        
          </Typography>
      </Grid>
    </Grid>
  )
}

export default function Contact () {
  return(
    <Grid container bgcolor="#121212" gap="30px"> 
      <SectionHeader headerName="Contact" />
      <ContactBody/>
    </Grid>
  )
}