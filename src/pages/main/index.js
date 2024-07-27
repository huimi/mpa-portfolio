import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from 'components/navbar';
import Tab from 'components/tab';
import Card from 'components/card';
import Footer from 'components/footer';
import Me from 'static/img.jpg';
import './index.css';
import 'styles/app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <header className="container container-large margin-bottom-large">
        <Navbar />
      </header>
      <div className="container container-large main" tabIndex="-1">
        <img alt="me" src={Me} width="3012" height="2288" loading="lazy" />
        <div className="intro">
          <h1 className="no-padding-top">Hi, I'm Huilan Hsieh.</h1>
          <p>
            I am a front-end developer passionate about building responsive and visually appealing web applications.
          </p>
        </div>
      </div>
      <div id="about" className="container container-large margin-top-large">
        <h1>About me</h1>
        <p>
          Experienced Software Engineer at Shalom Inc., with 3 years of expertise in Javascript(BackboneJS), JQuery, HTML, CSS for Property Management System, and React for Content Management System. Proven ability to develop and maintain robust and scalable software solutions.
        </p>
      </div>
      <div id="experience" className="container container-large experience margin-top-large">
        <h1>Experience</h1>
        <Tab />
      </div>
      <div id="project" className="container container-large project margin-top-medium">
        <h1>Project</h1>
        <Card />
      </div>
      <div id="challenge" className="container container-large margin-top-medium">
        <h1>Challenge</h1>
        <h4><a href="https://www.frontendmentor.io/">Frontend Mentor</a></h4>
        <ul className="square">
          <li>
            <a href="/url-shortening/">Url shortening.</a> (React, Sass)
          </li>
          <li>
            Launching a <a href="/countdown-timer/">countdown timer.</a> (React, CSS animation)
          </li>
          <li>
            <a href="/bar-chart/">Bar chart</a> component. (CSS grid)
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  </React.StrictMode>
);
