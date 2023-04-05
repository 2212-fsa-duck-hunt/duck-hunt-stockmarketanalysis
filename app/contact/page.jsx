"use client";
import { Typography, Box, Grid, Paper } from "@mui/material";
// import "../stocks/styles.css";
import "../../public/about.css"

export default function About() {
  return (
    <section>
      <div className="header">
        <h1> Contact the Team</h1>
      </div>
      <div className="profile-container">
        <div className="profile-card">
          <img src="alex.png" alt="image1" className="profile-icon" />
          <div className="profile-name">Alex Bernt</div>
          <div className="profile-position">Software Developer</div>
          <a href="https://www.linkedin.com/in/alex-bernt/" className="button">Connect</a>
        </div>
        <div className="profile-card">
          <img src="stephen.png" alt="image1" className="profile-icon" />
          <div className="profile-name">Stephen Shih</div>
          <div className="profile-position">Software Developer</div>
          <a href="https://www.linkedin.com/in/sshih1116/" className="button">Connect</a>
        </div>
        <div class="profile-card">
          <img src="michelle.jpg" alt="image1" className="profile-icon" />
          <div className="profile-name">Michelle Zou</div>
          <div className="profile-position">Software Developer</div>
          <a href="https://www.linkedin.com/in/yuhanmzou/" className="button">Connect</a>
        </div>
        <div className="profile-card">
          <img src="bena.jpg" alt="image1" className="profile-icon" />
          <div className="profile-name">Ben Agalliu</div>
          <div className="profile-position">Software Developer</div>
          <a href="https://www.linkedin.com/in/benjamin-agalliu/" className="button">Connect</a>
        </div>
      </div>
      <div className="footer">
        <h1> Resources </h1>
      </div>
      <div className="profile-container2">
        <div className="profile-card">
          <img src="https://avatars.githubusercontent.com/u/37190687?s=280&v=4" alt="image3" className="profile-icon" />
          <div className="profile-name">ApexCharts.js</div>
          <div className="profile-position">Charting Library</div>
          <a href="https://apexcharts.com/" className="button">View</a>
        </div>
        <div className="profile-card">
          <img src="https://logowik.com/content/uploads/images/firebase.jpg" alt="image3" className="profile-icon" />
          <div className="profile-name">Firebase</div>
          <div className="profile-position">Database Storage</div>
          <a href="https://firebase.google.com/" className="button">View</a>
        </div>
        <div className="profile-card">
          <img src="https://media.licdn.com/dms/image/C560BAQGSm84dGKXdKg/company-logo_200_200/0/1678293523742?e=2147483647&v=beta&t=FhHZpEEexkFYx4fo4f9HacfSe9hG_4kcrjN3LxKxPhE" alt="image3" className="profile-icon" />
          <div className="profile-name">Polygon.io</div>
          <div className="profile-position">API</div>
          <a href="https://polygon.io/" className="button">View</a>
        </div>
        <div className="profile-card">
          <img src="https://v4.mui.com/static/logo.png" alt="image3" className="profile-icon" />
          <div className="profile-name">Material UI</div>
          <div className="profile-position">React UI Library</div>
          <a href="https://mui.com/" className="button">View</a>
        </div>
        <div className="profile-card">
          <img src="https://nextjs.org/static/blog/next-13/twitter-card.png" alt="image3" className="profile-icon" />
          <div className="profile-name">Next JS 13</div>
          <div className="profile-position">React Framework</div>
          <a href="https://beta.nextjs.org/docs" className="button">View</a>
        </div>
      </div>
    </section>



  )
}
