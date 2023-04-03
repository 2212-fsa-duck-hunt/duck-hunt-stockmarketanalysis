"use client";
import { Typography, Box, Grid, Paper } from "@mui/material";
import "../stocks/styles.css";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Typography
        variant={"h3"}
        display="flex"
        justifyContent="center"
        style={{
          fontFamily: "Poppins",
          marginTop: 25,
        }}
        sx={{ color: "#53588c" }}
      >
        About Us
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container columnSpacing={3} marginTop={10}>
          <Grid item xs={3}>
            <Paper
              style={{
                justifyContent: "center",
                display: "flex",
                backgroundColor: "#e0e2ef",
              }}
            >
              <img src="Alex.png" height="auto" width="250" />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>Hello</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>Hello</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>Hello</Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
