import React, { useState, useEffect, useRef } from 'react';
import fb from 'images/countdown-timer-icon-facebook.svg';
import ig from 'images/countdown-timer-icon-instagram.svg';
import pt from 'images/countdown-timer-icon-pinterest.svg';
import 'styles/app.css';
import './index.css';

const TIME = 10 * 86400;

function Card ({ subtitle, data, flip }) {
  let prev = data + 1;
  if (subtitle === 'HOURS' && prev > 23) {
    prev = 0;
  } else if (subtitle !== 'DAYS' && prev > 59) {
    prev = 0;
  }

  prev = prev < 10 ? `0${prev}` : prev;
  const next = data < 10 ? `0${data}` : data;

  const animatedTopCard = !flip
    ? <div className="top">{ next }</div>
    : <>
      <div key={prev} className="top-flip">{ prev }</div>
      <div className="top">{ next }</div>
    </>;

  const animatedBottomCard = !flip
    ? <div className="bottom">{ next }</div>
    : <>
    <div key={next} className="bottom-flip">{ next }</div>
    <div className="bottom">{ prev }</div>
  </>;

  return (
    <div className="card">
      <div className="flip-card">
        { animatedTopCard }
        <div className="concave concave-left"></div>
        <div className="concave concave-right"></div>
        { animatedBottomCard }
      </div>
      <div className="subtitle">{subtitle}</div>
    </div>
  )
}

const getTimeNumber = (t) => {
  return {
    seconds: t % 60,
    minutes: Math.floor(t / 60) % 60,
    hours: Math.floor(t / 3600) % 24,
    days: Math.floor(t / 86400)
  }
}

function App () {
  const [time, setTime] = useState(
    {
      diff: TIME,
      ...getTimeNumber(TIME),
      sFlip: false,
      mFlip: false,
      hFlip: false,
      dFlip: false
    }
  );
  const timeId = useRef(null);

  useEffect(() => {
    if (time.diff === 0) {
      clearInterval(timeId.current);
    }
  }, [time.diff])

  useEffect(() => {
    timeId.current = setInterval(() => {
      if (time.diff > 0) {
        setTime(t => {
          const { seconds, minutes, hours, days } = getTimeNumber(t.diff - 1);
          return {
            diff: t.diff - 1,
            seconds,
            minutes,
            hours,
            days,
            sFlip: seconds !== t.seconds,
            mFlip: minutes !== t.minutes,
            hFlip: hours !== t.hours,
            dFlip: days !== t.days
          }
        });
      }
    }, 1100);
    return () => clearInterval(timeId.current);
  // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div className="main">
        <h5 className="title">WE'RE LAUNCHING SOON</h5>
        <div className="segment">
          <Card key={'day'} subtitle={'DAYS'} data={ time.days } flip={ time.dFlip } />
          <Card key={'hour'} subtitle={'HOURS'} data={ time.hours } flip={ time.hFlip } />
          <Card key={'minute'} subtitle={'MINUTES'} data={ time.minutes } flip={ time.mFlip } />
          <Card key={'second'} subtitle={'SECONDS'} data={ time.seconds } flip={ time.sFlip } />
        </div>
      </div>
      <div className="footer">
        <img src={fb} height={24} width={24} alt="facebook" />
        <img src={ig} height={24} width={24} alt="instagram" />
        <img src={pt} height={24} width={24} alt="pinterest" />
      </div>
    </div>
  );
}

export default App;
