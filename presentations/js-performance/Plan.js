import React from 'react';
import Slide from './components/Slide';
import Statement from './components/Statement';

export default function () {
  return (
    <Slide>
      <Statement>Load and render app in &lt; 1 second</Statement>
      <Statement>Respond to Sparkle! in &lt; 100ms</Statement>
      <Statement>Animate sparkles at 60fps</Statement>
    </Slide>);
}
