import React from 'react';
import { renderSlideList } from 'react-present';
import {
  Attribution,
  Code,
  Delay,
  Highlight,
  List,
  Slide,
  Statement,
  Title,
  Top
} from 'react-present/components/presentation/Parts';

import truckSrc from './images/monster-trucks.gif'
import bikeSrc from './images/bikes.gif'
const someCode = `function crush(truckId, carId) {
  animator().
    jump(truckId)
    land(carId);
}`

const slideList = {
  title: 'Example Presentation',
  align: 'top',
  slides: [
    <Slide>
      <Title>Title: Monster Trucks are the best</Title>
    </Slide>,
    <Slide>
      <Statement>A very long winded statement</Statement>
      <Attribution>- from the author</Attribution>
    </Slide>,
    <Slide>
      <Title>!!!Monster Trucks!!!</Title>
      <img src={ truckSrc } alt="image" />
    </Slide>,
    <Slide>
      <List title="my rad wishlist" items={ ['truck', 'moto', 'jetski', 'snow machine'] } />
    </Slide>,
    <Slide>
      <Title>Some code</Title>
      <Code>{ someCode }</Code>
    </Slide>,
    <Slide>
      <Top>
        <Title>Bikes at the top!</Title>
        <img src={ bikeSrc } alt="image" />
      </Top>
    </Slide>,
    <Slide>
      <span><Highlight>highlighted</Highlight> text</span>
    </Slide>,
    <Slide>
      <Title>Click to animate item</Title>
      <Delay>jump it!</Delay>
      <Delay>jump it again!</Delay>
    </Slide>
  ]
};

(() => {
  renderSlideList(slideList);
})();
