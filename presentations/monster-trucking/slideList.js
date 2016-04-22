import React from 'react';

import Intro from './Intro';
import Truck from './Truck';
import Bike from './Bike';
import Device from './Device';
import Native from './Native';
import Remote from './Remote';
import IOS from './IOS';

const slideComponents = [
  Intro,
  Truck,
  Native,
  Bike,
  Device,
  Remote,
  IOS
];

export default slideComponents.map((SlideComponent, idx) => {
  return <SlideComponent key={ idx } />;
});
