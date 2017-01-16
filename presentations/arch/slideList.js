import React from 'react';

import Title from './Title';
import What from './What';
import WhatList from './WhatList';
import Questions from './Questions';
import TheProblem from './TheProblem';
import TheOptions from './TheOptions';
import UseSomethingElse from './UseSomethingElse';
import TheReactWay from './TheReactWay';
import ReactIs from './ReactIs';
import ReactPerforms from './ReactPerforms';
import ReactRehab from './ReactRehab';
import ReactBonuses from './ReactBonuses';
import ReactIsnt from './ReactIsnt';
import ReactCons from './ReactCons';


const slideComponents = [
  Title,
  What,
  WhatList,
  Questions,
  TheProblem,
  TheOptions,
  UseSomethingElse,
  TheReactWay,
  ReactIs,
  ReactPerforms,
  ReactRehab,
  ReactBonuses,
  ReactIsnt,
  ReactCons
];

export default slideComponents.map((SlideComponent, idx) => {
  return <SlideComponent key={ idx } />;
});
