import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import SparkleApp from './components/SparkleApp';
import { initWithLargeImage } from './components/SparkleApp/initialize';

export default function() {
  return (
    <Slide>
      <Title>un-optimized</Title>
      <SparkleApp initResources={ initWithLargeImage } />
    </Slide>);
}
