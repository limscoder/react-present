import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import CodeBlock from '../../lib/components/CodeBlock';

const code =
`function init() {
  const playAudio = () => {
    fetchAudio().then(audio => audio.play());
  };

  fetchBitmap().then(
    bitmap => renderApp(bitmap, playAudio));
}`;

export default function() {
  return (
    <Slide>
      <Title>lazy code</Title>
      <CodeBlock>{ code }</CodeBlock>
    </Slide>);
}
