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
import CrossCuttingBehavior from './CrossCuttingBehavior.jsx';
import Mixins from './Mixins.jsx';
import Composition from './Composition.jsx';
import ComponentWrapper from './ComponentWrapper.jsx';
import Styling from './Styling.jsx';
import InlineStyling from './InlineStyling.jsx';
import Namespacing from './Namespacing.jsx';
import Other from './Other.jsx';

export default [
  <Intro title="" />,
  <Components title="What is a highly reusable component?"/>,
  <DevEnvironment title="Components should work outside of your app" />,
  <StatefulApi title="Mo' state Mo' problems" />,
  <StatelessApi title="PropTypes are the API" />,
  <StrictProps title="Be strict with your props" />,
  <Children title="props.children: a component developer's best friend" />,
  <ElementProps title="Refactor element props into children" />,
  <LiteralChildren title="Child elements don't have to be literal children" />,
  <CrossCuttingBehavior title="Applying cross-cutting behavior to many components" />,
  <Mixins title="I know what to do. Let's use a mixin." />,
  <Composition title="props.children comes to the rescue again" />,
  <ComponentWrapper title="Automate component composition with helper functions" />,
  <Styling title="CSS: here be dragons" />,
  <InlineStyling title="Inline styles: here be cuter dragons" />,
  <Namespacing title="CSS Namespacing: the best of the worst" />,
  <Other title="Other stuff reusable components should probably have" />
];
