import React from 'react';

import Intro from './Intro';
import SharedDeps from './SharedDeps';
import RepoSupremo from './RepoSupremo';
import Phase1 from './Phase1';
import Phase2 from './Phase2';
import Faq from './Faq';

const slideComponents = [
  Intro,
  SharedDeps,
  RepoSupremo,
  Phase1,
  Phase2,
  Faq
];

export default slideComponents.map((SlideComponent, idx) => {
  return <SlideComponent key={ idx } />;
});
