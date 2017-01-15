import React from 'react';

import Title from './Title';
import What from './What';
import Intro from './Intro';
import TheProblem from './TheProblem';
import TheOptions from './TheOptions';
import TheReactWay from './TheReactWay';

const slideComponents = [
  Title,
  What,
  Intro,
  TheProblem,
  TheOptions,
  TheReactWay,
];

export default slideComponents.map((SlideComponent, idx) => {
  return <SlideComponent key={ idx } />;
});
