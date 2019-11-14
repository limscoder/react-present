import React from 'react';
import Slide from './components/Slide';
import Statement from './components/Statement';
import Title from './components/Title';

export default function () {
  return (
    <Slide>
      <Title>Framework Specific</Title>
      <Statement>react-addons-perf</Statement>
      <Statement>ng-stats</Statement>
    </Slide>);
}