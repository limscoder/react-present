import React from 'react';
import './index.html';

(() => {
  if (!window.React) {
    window.React = React; // Global React needed for React dev tools
  }

  console.log('yeeha!');
});
