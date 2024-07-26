import React from 'react';

function Button ({ text, ...props }) {
  return (
    <button type="button" {...props}>{ text }</button>
  );
}
export default Button;
