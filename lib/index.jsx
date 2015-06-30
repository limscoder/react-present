import React from 'react';

import './index.html';

import SlideDeck from './components/SlideDeck.jsx';

(() => {
  if (!window.React) {
    window.React = React; // Global React needed for React dev tools
  }

  React.render(<SlideDeck />, window.document.getElementById('slide-deck'));
})();
