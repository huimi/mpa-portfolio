import React from 'react';

function Link ({ text, ...props }) {
  return (
    <a {...props}>{ text }</a>
  );
}

export default Link;
