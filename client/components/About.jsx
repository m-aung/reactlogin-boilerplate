import React from 'react'
const About = () => {
  return (
    <div className="context">
    <div style ={{
      display: "block",
      textAlign: "left",
      paddingTop: "5px",
      marginLeft: "3em",
      letterSpacing: "1.5px",
      }}>
    <h1>About React Boilerplate for Login Authentication</h1>
    <h2>Front End</h2>
    <article>Components are organized within components directory. All the fetching services from backend is handled in Common.js under services. This is the basic Template for authentication without database connection. </article>
    <h2>Back End</h2>
    <article>Server has an end point to handle authentication from Client(Front-end). Currently using Dummy data to test the authentication. You can either use <strong>PostgreSQL, MongoDB, MySQL</strong> or any databases to store and fetch user data. Serverless architecture can be use with the same kind of logic. New version of this boiler plate will feature the serverless webhooks on AWS or MongoDB. </article>
    <p>If you have any issues, please create issue on the github. Please give this repo <a href="https://github.com/m-aung/reactlogin-boilerplate" target="_blank"><i className="fab fa-github"></i></a> a star if you find it useful.</p>
    <center>Developed by <strong> Software Engineer Myo Aung </strong> | <a href="https://www.linkedin.com/in/myo-t-aung" target="_blank"><i className="fab fa-linkedin"></i></a></center>
    </div>
    </div>
  )
}
export default About