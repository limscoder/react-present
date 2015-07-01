import React from 'react';

import Intro from './Intro.jsx';
import Components from './Components.jsx';
import DevEnvironment from './DevEnvironment.jsx';
import StatefulApi from './StatefulApi.jsx';
import StatelessApi from './StatelessApi.jsx';
import DefaultProps from './DefaultProps.jsx';
import StrictProps from './StrictProps.jsx';
import Children from './Children.jsx';
import ElementProps from './ElementProps.jsx';
import LiteralChildren from './LiteralChildren.jsx';

export default [
  <Intro title="" />,
  <Components title="What is a highly reusable component?"/>,
  <DevEnvironment title="Components should work outside of your app" />,
  <StatefulApi title="Mo' state Mo' problems" />,
  <StatelessApi title="PropTypes are the API" />,
  <StrictProps title="Be strict with your props" />,
  <Children title="props.children: a component developer's best friend" />,
  <ElementProps title="Refactor element props into children" />,
  <LiteralChildren title="Child elements don't have to be literal children" />
  // implementing cross cutting behavior
  // with: mixins
  // with: composition
  // with: wrapping
  // why css sucks
  // why inline styles suck
  // how to use css namespacing
];
