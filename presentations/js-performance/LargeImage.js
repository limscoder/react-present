import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import CodeBlock from '../../lib/components/CodeBlock';

const largeCode = '<img src="unicorn-large.png" />';
const smallCode = '<img src="unicorn-small.png" />';

export default function() {
  return (
    <Slide>
      <Title>reduce file size</Title>
      <CodeBlock>{ largeCode }</CodeBlock>
      <CodeBlock>{ smallCode }</CodeBlock>
    </Slide>);
}
