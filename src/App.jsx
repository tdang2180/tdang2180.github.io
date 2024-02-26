import React from "react";
import { Grid, Stack } from "@mui/material";
import Header from "./screens/Header";
import Project from "./screens/Project";
import About from "./screens/About";
import Awards from "./screens/Awards";
import Contact from "./screens/Contact";

export default function App () {
  return(
    <>
    <Header/>
    <Stack bgcolor="#121212" spacing={7}>
      <About/>
      <Project/>
      <Contact/>
    </Stack>
    </>
  )
}

