import React from 'react';
import {
  Attribution,
  Code,
  Delay,
  Highlight,
  List,
  Statement,
  Title,
  Top
} from '../../lib/components/presentation/Parts';

import truckSrc from './images/monster-trucks.gif'
import bikeSrc from './images/bikes.gif'
const someCode = `function crush(truckId, carId) {
  animator().
    jump(truckId)
    land(carId);
}`

export default {
  title: 'Example Presentation',
  align: 'top',
  slides: [
    <Title>Title: Monster Trucks are the best</Title>,
    [
      <Statement>A very long winded statement</Statement>,
      <Attribution>- from the author</Attribution>,
    ],
    [
      <Title>!!!Monster Trucks!!!</Title>,
      <img src={ truckSrc } alt="image" />
    ],
    <List title="my rad wishlist" items={ ['truck', 'moto', 'jetski', 'snow machine'] } />,
    [
      <Title>Some code</Title>,
      <Code>{ someCode }</Code>
    ],
    <Top>
      <Title>Bikes at the top!</Title>
      <img src={ bikeSrc } alt="image" />
    </Top>,
    <span><Highlight>highlighted</Highlight> text</span>,
    [
      <Title>Click to animate item</Title>,
      <Delay>jump it!</Delay>,
      <Delay>jump it again!</Delay>
    ]
  ]
};