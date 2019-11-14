import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';
import CodeBlock from '../../lib/components/CodeBlock';

const code =
`// @flow
function concat(a: string, b: string): string {
  return a + b;
}`;

export default function () {
  return (
    <Slide>
      <Title>Case Study: Flowtype</Title>
      <CodeBlock>{ code }</CodeBlock>
    </Slide>);
}
