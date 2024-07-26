import React, { useState } from 'react';
import Button from 'components/url-shortening/button';
import History from 'components/url-shortening/history';

function Form () {
  const [query, setQuery] = useState('');
  const [loading, setIsLoading] = useState(false);
  const [resultUrl, setResultUrl] = useState([]);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const result = await fetch('/api/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: query })
      });
      const response = await result.json();
      if (response.error) {
        setError('URL is invalid');
      } else {
        const tmp = resultUrl;
        tmp.push({ longUrl: query, shortenUrl: response.result_url });
        setResultUrl(tmp);
      }
    } catch (error) {
      setError('Please try again later');
    }
    setIsLoading(false);
  }

  return (
    <div className="shorten container">
      <div className="translate-wrapper">
        <div className="form-container">
          <div className="input-container" >
            <input
              name="text"
              className={error === '' ? '' : 'error'}
              placeholder="Shorten a link here..."
              onChange={ e => setQuery(e.target.value)}
              onFocus={ () => setError('') }
            />
            <div className="error-container">{error}</div>
          </div>
          <Button
            page="shorten"
            text="Shorten It!"
            disabled={ loading }
            onClick={ () => {
              if (query.length > 0) {
                fetchData();
              } else {
                setError('Please add a link');
              }
            }
          }/>
        </div>
        { resultUrl.length > 0 && <History resultUrl={ resultUrl } />}
      </div>
    </div>
  );
}

export default Form;
