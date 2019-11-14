import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';

export default function () {
  return (
    <Slide>
      <Title>Rollout Plan</Title>
      <Statement>Integrate and deprecate</Statement>
      <Statement>Maintenance and tooling investment</Statement>
      <Statement>Developer training</Statement>
    </Slide>);
}
