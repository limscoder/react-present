import React from 'react';
import css from 'glamor';
import glamorous from 'glamorous';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';
import unicornSrc from './components/SparkleApp/images/unicorn.png';

const fadeIn = css.keyframes({
  '0%': {opacity: 0},
  '100%': {opacity: 0.5}
});

const Background = glamorous.div({
  position: 'absolute',
  backgroundImage: `url(${unicornSrc})`,
  backgroundRepeat: 'space',
  backgroundPosition: 'center',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0.5,
  animation: `${fadeIn} 5s ease-in`
});

export default function () {
  return (
    <Slide>
      <Title>Load - 1000 ms</Title>
      <Statement>initial site load</Statement>
      <Statement>data and content loading</Statement>
      <Statement>page and view change</Statement>
      <Background />
    </Slide>);
}
