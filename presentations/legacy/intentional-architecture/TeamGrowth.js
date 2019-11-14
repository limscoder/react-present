import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import imgSrc from './images/growing-team.png';

export default function () {
  // Communication channels get more complicated as teams grow,
  // leading to a break down in alignment among teams.
  //
  // The easy solution to avoiding conflict is allowing each team
  // to operate indepenently.
  return (
    <Slide>
      <Title>Outgrowing emergent architecture</Title>
      <img src={ imgSrc } alt="growing team" />
    </Slide>);
}
