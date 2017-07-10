import React from "react";
import ReactDOMServer from "react-dom/server";
import css from "raw-loader!./SlideDeck.css";

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
  return getPageHtml(ReactDOMServer.renderToString(slide));
}
