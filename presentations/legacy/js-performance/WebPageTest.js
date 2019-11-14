import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import wptSrc from './images/web-page-test.png';

export default function () {
  return (
    <Slide>
      <Title>WebPageTest (www.webpagetest.org)</Title>
      <img src={ wptSrc } />
    </Slide>);
}