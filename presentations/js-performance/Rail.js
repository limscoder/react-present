import React from 'react';
import glamorous from 'glamorous';
import Attribution from './components/Attribution';
import Slide from './components/Slide';
import Title from './components/Title';

const Measurement = glamorous.div({
  textAlign: 'left',
  width: '800px'
});
const Label = glamorous.div({
  fontSize: '32px'
});
const Emphasis = glamorous.span({
  fontSize: '96px',
  fontWeight: 'bold',
  marginRight: '8px'
});

export default function () {
  return (
    <Slide>
      <Title>RAIL model</Title>
      <Measurement>
        <Label><Emphasis>L</Emphasis>oad</Label>
        <Label><Emphasis>I</Emphasis>dle</Label>
        <Label><Emphasis>A</Emphasis>nimation</Label>
        <Label><Emphasis>R</Emphasis>esponse</Label>
      </Measurement>
      <Attribution>- Paul Irish + Paul Lewis @ Google</Attribution>
    </Slide>);
}
