"use client";
import { Typography, Box, Grid, Paper } from "@mui/material";
// import "../stocks/styles.css";
import "../../public/about.css"
import Image from "next/image";

export default function About() {
  // return (
  //   <div>
  //     <Typography
  //       variant={"h3"}
  //       display="flex"
  //       justifyContent="center"
  //       style={{
  //         fontFamily: "Poppins",
  //         marginTop: 25,
  //       }}
  //       sx={{ color: "#53588c" }}
  //     >
  //       About Us
  //     </Typography>
  //     <Box sx={{ flexGrow: 1 }}>
  //       <Grid container columnSpacing={3} marginTop={10}>
  //         <Grid item xs={3}>
  //           <Paper
  //             style={{
  //               justifyContent: "center",
  //               display: "flex",
  //               backgroundColor: "#e0e2ef",
  //             }}
  //           >
  //             <img src="Alex.png" height="auto" width="250" />
  //           </Paper>
  //         </Grid>
  //         <Grid item xs={3}>
  //           <Paper>Hello</Paper>
  //         </Grid>
  //         <Grid item xs={3}>
  //           <Paper>Hello</Paper>
  //         </Grid>
  //         <Grid item xs={3}>
  //           <Paper>Hello</Paper>
  //         </Grid>
  //       </Grid>
  //     </Box>
  //   </div>
  // );

  return (
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="our-team">
            <div class="picture">
              <img class="img-fluid" src="https://picsum.photos/130/130?image=1027" />
            </div>
            <div class="team-content">
              <h3 class="name">Michele Miller</h3>
              <h4 class="title">Web Developer</h4>
            </div>
            <ul class="social">
              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a></li>
              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="our-team">
            <div class="picture">
              <img class="img-fluid" src="https://picsum.photos/130/130?image=839" />
            </div>
            <div class="team-content">
              <h3 class="name">Patricia Knott</h3>
              <h4 class="title">Web Developer</h4>
            </div>
            <ul class="social">
              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a></li>
              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="our-team">
            <div class="picture">
              <img class="img-fluid" src="https://picsum.photos/130/130?image=856" />
            </div>
            <div class="team-content">
              <h3 class="name">Justin Ramos</h3>
              <h4 class="title">Web Developer</h4>
            </div>
            <ul class="social">
              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a></li>
              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="our-team">
            <div class="picture">
              {/* <img class="img-fluid" src="https://picsum.photos/130/130?image=836" /> */}
            </div>
            <div class="team-content">
              <h3 class="name">Mary Huntley</h3>
              <h4 class="title">Web Developer</h4>
            </div>
            <ul class="social">
              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a></li>
              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
