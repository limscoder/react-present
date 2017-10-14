import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import CodeBlock from '../../lib/components/CodeBlock';

const code =
`<img srcset="unicorn-micro.png 480w,
              unicorn-small.png 800w,
              unicorn-large.png"
      sizes="(min-width: 600px) 480px,
             (min-width: 1024px) 800px,
             75vw"
      src="unicorn-large.png" />`;

export default function() {
  return (
    <Slide>
      <Title>reduce file size</Title>
      <CodeBlock>{ code }</CodeBlock>
    </Slide>);
}
