"use client";
import { Typography, Box, Grid, Paper } from "@mui/material";
// import "../stocks/styles.css";
import "../../public/about.css"

export default function About() {
  return (
    <section>
      <div class="header">
        <h1> Contact the Team</h1>
      </div>
      <div class="profile-container">
        <div class="profile-card">
          <img src="alex.png" alt="image1" class="profile-icon" />
          <div class="profile-name">Alex Bernt</div>
          <div class="profile-position">Software Developer</div>
          <a href="https://www.linkedin.com/in/alex-bernt/" class="button">Connect</a>
        </div>
        <div class="profile-card">
          <img src="stephen.png" alt="image1" class="profile-icon" />
          <div class="profile-name">Stephen Shih</div>
          <div class="profile-position">Software Developer</div>
          <a href="https://www.linkedin.com/in/sshih1116/" class="button">Connect</a>
        </div>
        <div class="profile-card">
          <img src="michelle.jpg" alt="image1" class="profile-icon" />
          <div class="profile-name">Michelle Zou</div>
          <div class="profile-position">Software Developer</div>
          <a href="https://www.linkedin.com/in/yuhanmzou/" class="button">Connect</a>
        </div>
        <div class="profile-card">
          <img src="bena.png" alt="image1" class="profile-icon" />
          <div class="profile-name">Ben Agalliu</div>
          <div class="profile-position">Software Developer</div>
          <a href="https://www.linkedin.com/in/benjamin-agalliu/" class="button">Connect</a>
        </div>
      </div>
      <div class="footer">
        <h1> Resources </h1>
      </div>
      <div class="profile-container2">
        <div class="profile-card">
          <img src="https://avatars.githubusercontent.com/u/37190687?s=280&v=4" alt="image3" class="profile-icon" />
          <div class="profile-name">ApexCharts.js</div>
          <div class="profile-position">Charting Library</div>
          <a href="https://apexcharts.com/" class="button">View</a>
        </div>
        <div class="profile-card">
          <img src="https://logowik.com/content/uploads/images/firebase.jpg" alt="image3" class="profile-icon" />
          <div class="profile-name">Firebase</div>
          <div class="profile-position">Database Storage</div>
          <a href="https://firebase.google.com/" class="button">View</a>
        </div>
        <div class="profile-card">
          <img src="https://media.licdn.com/dms/image/C560BAQGSm84dGKXdKg/company-logo_200_200/0/1678293523742?e=2147483647&v=beta&t=FhHZpEEexkFYx4fo4f9HacfSe9hG_4kcrjN3LxKxPhE" alt="image3" class="profile-icon" />
          <div class="profile-name">Polygon.io</div>
          <div class="profile-position">API</div>
          <a href="https://polygon.io/" class="button">View</a>
        </div>
        <div class="profile-card">
          <img src="https://v4.mui.com/static/logo.png" alt="image3" class="profile-icon" />
          <div class="profile-name">Material UI</div>
          <div class="profile-position">React UI Library</div>
          <a href="https://mui.com/" class="button">View</a>
        </div>
        <div class="profile-card">
          <img src="https://nextjs.org/static/blog/next-13/twitter-card.png" alt="image3" class="profile-icon" />
          <div class="profile-name">Next JS 13</div>
          <div class="profile-position">React Framework</div>
          <a href="https://beta.nextjs.org/docs" class="button">View</a>
        </div>
      </div>
    </section>



  )
}
