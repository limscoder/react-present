import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';

export default function () {
  return (
    <Slide>
      <Title>Post-rollout retro</Title>
      <Statement>What work is left?</Statement>
      <Statement>How can we do better next time?</Statement>
      <Statement>Is it working as expected?</Statement>
    </Slide>);
}
