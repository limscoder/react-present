import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import imgSrc from './images/perf-chart.png';

export default function () {
  return (
    <Slide>
      <Title>Quality and Performance</Title>
      <img src={ imgSrc } alt="performance" />
    </Slide>);
}
