import React from 'react';
import Slide from './components/Slide';
import Statement from './components/Statement';
import Title from './components/Title';

export default function () {
  return (
    <Slide>
      <Title>optimize network</Title>
      <Statement>minimize file count and size</Statement>
      <Statement>configure cache headers</Statement>
      <Statement>use etags</Statement>
      <Statement>configure compression</Statement>
      <Statement>use http2</Statement>
      <Statement>use a CDN</Statement>
    </Slide>);
}
