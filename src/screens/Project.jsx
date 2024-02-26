import React from "react";
import { Grid, Typography, Divider }  from "@mui/material";
import SectionHeader from "../components/SectionHeader";

import let_mesh from "../media/let_mesh.png";
import mesh_profile from "../media/mesh_profile.png";
import professor_report from "../media/professor_report.png";
import progress_bar from "../media/progress_bar.png";
import todo_bar from "../media/todo_bar.png";
import  icebreak from "../media/icebreak.png";
import mesh_logo from "../media/mesh_logo.png";
import bdm_logo from "../media/bdm_logo.png";


const styles = {
  text: {
    fontFamily: "serif",
    color: "white",
    fontSize: "18px",
  },
  titleText: {
    fontFamily: "serif",
    color: "white",
    fontSize: "21px",
    textDecoration: "underline",
    textDecorationColor: "white",
    ":hover": {
      textDecorationColor: "grey", 
      color: "grey",  
    },  
  },
  projectTitle: {
    alignItems: "center",
    ml: "25px",
    gap: "15px"
  }
}

const ProjectOne = () => {
  const handleLetMesh = () => {
    window.open("https://github.com/LetsMesh")
  }
  return(
    <Grid container id="mesh" gap="40px" >

      <Grid item container sx={styles.projectTitle}>
        <img alt="mesh_logo" srcSet={`${mesh_logo} 35000w`} style={{borderRadius: "50%"}}/>
        <Typography sx={styles.titleText} onClick={handleLetMesh}>Let Mesh</Typography>
      </Grid>

      <Grid item container gap="30px" justifyContent="center">
        <Grid xs = "11" >
          <Typography sx={styles.text}>
            Profile Occupation, Organization, and Biography: Inside the user’s profile, information 
            regarding the user’s occupation, organization, and biography is displayed in text boxes. 
            Users can edit and delete information from their profiles with a simple edit and save.
            <br/><br/>
            Store and Retrieve Data: I used Axios HTTP Client to directly store and retrieve data from 
            Let Mesh’s database. I also utilized Django’s admin tools and SQL workbench to manage the data
            transportation between the server and the client.
            <br/><br/>
            Input Validation: To prevent users from inputting special characters and extremely long paragraphs, 
            I added a character limit that would stop whenever the text length reached the limit value.
          
          </Typography>
        </Grid> 
        <img alt="mesh_profile" srcSet={`${mesh_profile} 5000w`}></img>
      </Grid>   

      <Grid item container gap="30px" justifyContent="center">  
        <Grid xs = "11">
          <Typography sx={styles.text}>
            Logged-in Home Screen: Users are directed to the logged-in home screen immediately after 
            logging into Let Mesh. This screen displays an overview of how users can begin to connect 
            with mentees/mentors. It also notifies users to update or complete their profiles to get the best matches.
            <br/> <br/>

            Responsive Design: I used React MUI’s theme customization to adjust the size of text components
            based on the user's device, which helps with compatibility. I tested the home screen’s responsiveness
            using Google Chrome’s developer tools.
 
          </Typography>
        </Grid> 
        <img alt="let_mesh" srcSet={`${let_mesh} 7700w`}></img>
      </Grid>

    </Grid>
  )
}

const ProjectTwo = () => {
  const handleBDM = () => {
    window.open("https://broncodirect.me/")
  }
  return(
    <Grid item container id="broncodirectme" gap="40px">

      <Grid item container sx={styles.projectTitle}>
        <img alt="bdm_logo" srcSet={`${bdm_logo} 20000w`} style={{borderRadius: "50%"}}/>
        <Typography sx={styles.titleText} onClick={handleBDM}>BroncoDirectMe</Typography>
      </Grid>

      <Grid item container gap="100px" ml="45px">
        <Grid id="professor_report" xs="6" >
          <Typography sx={styles.text}>
            Report Missing Professor: While searching for the perfect professors, students can file a report
            if the extension cannot find data based on the inputted name. The report asks for the name of the
            missing professor and their department.
            <br/> <br/>
            Form Validation: I used React’s hook form to display error signs and notify users if they leave one
            or more text boxes blank when they submit the form. 
          </Typography>
        </Grid>        
        <img alt="professor_report" srcSet={`${professor_report} 4000w`}></img> 
      </Grid>
      
      <Grid item container gap="100px" ml="45px">
        <Grid item id="degree_progress" xs="6">
          <Typography sx={styles.text}>
            Degree Progress Bar: The color-coded progress bar allows students to visualize their progress in distinct chunks. 
            Students can quickly check the progress bar to plan which classes to enroll in based on each section.
            <br/> <br/>
            To-Do Bar: Students can view a detailed to-do bar, breaking down the different portions of classes that are not in
            progress or have not been completed. I used React MUI’s switch component to set the state of the current bar presented. 
            <br/> <br/>
            Other Functionalities: The information icon displays the percentage of each section and is linked to the official 
            report of students’ degree progress.
          </Typography>
        </Grid>
        <Grid item id="degree_progress" xs="5">
          <img alt="progress_bar" srcSet={`${progress_bar} 3470w`}></img>
          <img alt="todo_bar" srcSet={`${todo_bar} 3360w`}></img> 
        </Grid>
      </Grid>

    </Grid>
  )
}

const ProjectThree = () => {
  return(
    <Grid item>
      <img alt="ice_break" srcSet={`${ice_break} 1050w`}></img> 
    </Grid>
  )
}

export default function Project() {
  return (
    <Grid container bgcolor="#121212" gap="30px">
      <SectionHeader headerName="Projects"/>
      <ProjectOne/>
      <Divider variant="middle" width="95%" color="grey"/>
      <ProjectTwo/>
      <Divider variant="middle" width="95%" color="grey"/>

    </Grid>

  )
}