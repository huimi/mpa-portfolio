import React from 'react';
import ReactDOM from 'react-dom/client';

import Navbar from 'components/url-shortening/navbar';
import Button from 'components/url-shortening/button';
import Form from 'components/url-shortening/form';
import Card from 'components/url-shortening/card';
import Footer from 'components/url-shortening/footer';
import iw from 'images/url-shortening/illustration-working.svg';

import 'styles/app.scss';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="content">
      <div className="main container">
        <Navbar />
        <div className="introduction">
          <div className="title-container">
            <h1>More than just shorter links</h1>
            <p>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <Button page="signup" text="Get Started" />
          </div>
          <img id="mainSvg" alt="iullstration-workding" src={iw} />
        </div>
      </div>
      <Form />
      <div className="feature container">
        <div className="title-container">
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="card-container">
          <div className="line"></div>
          <Card />
        </div>
      </div>
      <div className="boost container">
        <div className="title-container">
          <h2>Boost your links today</h2>
          <Button page={'start'} text={'Get Started'} />
        </div>
      </div>
      <Footer />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
