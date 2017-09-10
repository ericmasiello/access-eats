import React from 'react';
import img from '../keyboardcat.gif';

export default function NotFound() {
  return (
    <div>
      <h1>Oh no! Page not found :(</h1>
      <img src={img} alt="Keyboard cat" />
    </div>
  );
}