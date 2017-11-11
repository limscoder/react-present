import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';

export default function () {
  return (
    <Slide>
      <Title>Diligence</Title>
      <Statement>Community support</Statement>
      <Statement>Performance and scalability</Statement>
      <Statement>Backwards compatible upgrades</Statement>
      <Statement>Simplicity</Statement>
    </Slide>);
}
