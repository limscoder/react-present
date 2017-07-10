import React from 'react';
import Slide from './components/Slide';
import Statement from './components/Statement';

export default function () {
  return (
    <Slide>
      <Statement>minimize file count and size</Statement>
      <Statement>configure cache headers</Statement>
      <Statement>configure compression</Statement>
      <Statement>use http2</Statement>
      <Statement>use a CDN</Statement>
    </Slide>);
}
