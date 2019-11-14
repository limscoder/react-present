import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import CodeBlock from '../../lib/components/CodeBlock';

const code =
`function animateParticles(activeParticles) {
  return activeParticles.forEach(particle => {
    const bounds = calculateBounds();
    
    if (isInBounds(particle, bounds)) {
      moveParticle(particle);
    }
  });
}`;

export default function() {
  return (
    <Slide>
      <Title>slow animation</Title>
      <CodeBlock>{ code }</CodeBlock>
    </Slide>);
}
