import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import SparkleApp from './components/SparkleApp';
import { initWithLongFrames } from './components/SparkleApp/initialize';

export default function() {
  return (
    <Slide>
      <Title>optimize framerate (animation)</Title>
      <SparkleApp initResources={ initWithLongFrames } />
    </Slide>);
}
