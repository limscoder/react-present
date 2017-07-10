import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import CodeBlock from '../../lib/components/CodeBlock';

const code =
`function init() {
  fetchBitmap().then(bitmap => {
    return fetchAudio().then(audio => {
      renderApp(bitmap, audio);
    });
  });
}

function fetchBitmap() { ... }

function fetchAudio() { ... }`;

export default function() {
  return (
    <Slide>
      <Title>sequential code</Title>
      <CodeBlock>{ code }</CodeBlock>
    </Slide>);
}
