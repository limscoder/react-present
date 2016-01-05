import React from 'react';
import css from 'raw!./SlideDeck.css';

function getPageHtml(slideHtml) {
  return `
  <!DOCTYPE html>
  <html>

  <head>
    <title>react-present</title>
    <style>
      ${css}
    </style>
  </head>

  <body style="margin: 0" class="remote">
    ${slideHtml}
  </body>
  </html>
  `;
}

export function renderSlideToString(slide) {
  return getPageHtml(React.renderToString(slide));
}
