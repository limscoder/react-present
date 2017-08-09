import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import CodeBlock from '../../lib/components/CodeBlock';

const code =
`
function animateParticles(activeParticles) {
  return activeParticles.filter(drawParticle);
}

function drawParticle(particle) {
  const newParticle = // position calc snipped
  return isInBounds(newParticle);
}

function isInBounds(particle) {
  // this function is slow
  const bounds = calculateBounds();

  return particle.x - particle.size < bounds.width &&
    particle.x + particle.size > 0 &&
    particle.y - particle.size < bounds.height &&
    particle.y + particle.size > 0;
}`;

export default function() {
  return (
    <Slide>
      <Title>slow animation</Title>
      <CodeBlock>{ code }</CodeBlock>
    </Slide>);
}
