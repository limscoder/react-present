import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import CodeBlock from '../../lib/components/CodeBlock';

const code =
`
function animateParticles(activeParticles) {
  const bounds = calculateBounds();
  return activeParticles.filter(
    particle => drawParticle(bounds, particle));
}

function drawParticle(bounds, particle) {
  const newParticle = // position calc snipped
  return isInBounds(bounds, newParticle);
}

function isInBounds(bounds, particle) {
  return particle.x - particle.size < bounds.width &&
    particle.x + particle.size > 0 &&
    particle.y - particle.size < bounds.height &&
    particle.y + particle.size > 0;
}`;

export default function() {
  return (
    <Slide>
      <Title>faster animation</Title>
      <CodeBlock>{ code }</CodeBlock>
    </Slide>);
}
