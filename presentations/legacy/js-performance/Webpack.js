import React from 'react';
import Slide from './components/Slide';
import Statement from './components/Statement';
import Title from './components/Title';

export default function () {
  return (
    <Slide>
      <Title>Webpack + Babel</Title>
      <Statement>webpack-bundle-analyzer</Statement>
      <Statement>avoid debug configs</Statement>
      <Statement>optimizing plugins: dedupe, uglify, ignore, code splitting</Statement>
      <Statement>tree shaking: use rollup</Statement>
    </Slide>);
}