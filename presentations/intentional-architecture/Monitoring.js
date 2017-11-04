import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';

export default function () {
  return (
    <Slide>
      <Title>Observability</Title>
      <Statement>Saturation</Statement>
      <Statement>Latency</Statement>
      <Statement>Throughput</Statement>
      <Statement>Errors</Statement>
    </Slide>);
}
