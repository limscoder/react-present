import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import CodeBlock from '../../lib/components/CodeBlock';

const code =
`function animateParticles(activeParticles) {
  const bounds = calculateBounds();

  return activeParticles.forEach(particle => {
    if (isInBounds(particle, bounds)) {
      moveParticle(particle);
    }
  });
}`;

export default function() {
  return (
    <Slide>
      <Title>faster animation</Title>
      <CodeBlock>{ code }</CodeBlock>
    </Slide>);
}
