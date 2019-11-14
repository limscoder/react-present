import React from 'react';
const imgSrc = require('./images/emulator.png');

export default function Slide() {
  return (
    <div>
      <h1>Running your app</h1>
      <img src={ imgSrc } />
    </div>
  );
}