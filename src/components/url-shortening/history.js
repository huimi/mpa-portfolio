import React, { useState } from 'react';
import Button from 'components/url-shortening/button';

function History ({ resultUrl }) {
  const [copy, setCopy] = useState('Copy');
  return (<>
    {resultUrl.map((e, id) =>
      <div key={ id } className="history-container">
        <div className="url-container">{ e.longUrl }</div>
        <span className="url-right">{ e.shortenUrl }</span>
        <Button text={ copy } onFocus={() => setCopy('Copied!')} onBlur={() => setCopy('Copy')} />
      </div>
    )}
    </>);
}

export default History;
