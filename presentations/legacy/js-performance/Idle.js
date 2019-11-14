import React from 'react';
import css from 'glamor';
import glamorous from 'glamorous';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';

export default function () {
  return (
    <Slide>
      <Title>Idle - maximize idle time</Title>
      <Statement>perform background tasks</Statement>
      <Statement>pre-fetch resources</Statement>
    </Slide>);
}
