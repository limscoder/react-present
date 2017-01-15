import React from 'react';

import Intro from './Intro';
import What from './What';
import Questions from './Questions';
import Why from './Why';

const slideComponents = [
  Intro,
  Questions,
  Why,
  What,
];

export default slideComponents.map((SlideComponent, idx) => {
  return <SlideComponent key={ idx } />;
});
