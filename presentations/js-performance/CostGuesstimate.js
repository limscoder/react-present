import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import chartSrc from './images/perf-chart.png';

export default function () {
  return (
    <Slide>
      <Title>optimization cost guesstimate</Title>
      <img src={chartSrc} width="600px" />
    </Slide>);
}
