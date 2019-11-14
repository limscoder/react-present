import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import SparkleApp from './components/SparkleApp';
import { initWithLazyAudio } from './components/SparkleApp/initialize';

export default function() {
  return (
    <Slide>
      <Title>optimize response</Title>
      <SparkleApp initResources={ initWithLazyAudio } />
    </Slide>);
}
