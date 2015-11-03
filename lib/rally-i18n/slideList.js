import React from 'react';

import Intro from './Intro';
import Frameworks from './Frameworks';
import Services from './Services';
import Search from './Search';
import Churro from './Churro';
import Appsdk from './Appsdk';
import Appsdk1 from './Appsdk1';
import Appsdk2 from './Appsdk2';
import Appsdk3 from './Appsdk3';
import Spring from './Spring';
import Markup from './Markup';
import MetaData from './MetaData';
import Development from './Development';
import Translation from './Translation';

const slideComponents = [
  Intro,
  Frameworks,
  Services,
  Search,
  Churro,
  Appsdk,
  Appsdk1,
  Appsdk2,
  Appsdk3,
  Spring,
  Markup,
  MetaData,
  Development,
  Translation
];

export default slideComponents.map((SlideComponent, idx) => {
  return <SlideComponent key={ idx } />;
});
