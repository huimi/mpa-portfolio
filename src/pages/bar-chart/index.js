import React from 'react';
import ReactDOM from 'react-dom/client';
import Bar from 'components/bar.js';
import 'styles/app.css';
import 'styles/variables.css';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="wrapper">
      <div className="container">
        <header className="title">
          <div>
            <span className="small-font">My Balance</span>
            <h4>$921.68</h4>
          </div>
          <div className="circle circle-parent"><div className="circle circle-child"></div></div>
        </header>
        <div className="chart">
          <h4>Spending - Last 7 days</h4>
          <Bar />
          <hr />
          <div className="footer">
            <div>
              <span className="small-font">Total this month</span>
              <h4>$478.33</h4>
            </div>
            <div className="text-right text-end">
              <h6>+2.4%</h6>
              <span className="small-font">from last month</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.StrictMode>
);
