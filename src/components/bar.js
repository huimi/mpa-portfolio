import React from 'react';
import * as styles from 'styles/bar.module.css';

const DATA = [
  {
    day: 'mon',
    amount: 17.45
  },
  {
    day: 'tue',
    amount: 34.91
  },
  {
    day: 'wed',
    amount: 52.36
  },
  {
    day: 'thu',
    amount: 31.07
  },
  {
    day: 'fri',
    amount: 23.39
  },
  {
    day: 'sat',
    amount: 43.28
  },
  {
    day: 'sun',
    amount: 25.48
  }
];

function Bar () {
  const maxValue = Math.max(...DATA.map(d => d.amount));
  function getRow (amount) {
    return Math.round((amount / maxValue) * 10);
  }
  return (
    <div>
      <ul className={ styles.barchart }>
        { DATA.map((d, idx) => {
          return (
            <li key={idx}
                style={{
                  gridColumn: idx + 1,
                  gridRow: `${10 - getRow(d.amount) + 1} / ${11}`,
                  backgroundColor: d.amount === maxValue ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)'
                }}
            ><div className={ styles.tooltip }>{`$${d.amount}`}</div></li>
          )
        })}
      </ul>
      <ul className={ styles.label }>{ DATA.map((d, idx) =>
        <li key={idx} style={{ gridColumn: idx + 1, textAlign: 'center' }}
        >{d.day}</li>
      )}</ul>
    </div>
  );
}

export default Bar;
