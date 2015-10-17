import React from 'react';

import Intro from './Intro';
import Why from './Why';
import What from './What';
import Characteristics from './Characteristics';
import DevEnvironment from './DevEnvironment';
import StatefulApi from './StatefulApi';
import StatelessApi from './StatelessApi';
import StrictProps from './StrictProps';
import ReactConf from './ReactConf';
import Children from './Children';
import ElementProps from './ElementProps';
import LiteralChildren from './LiteralChildren';
import CrossCuttingBehavior from './CrossCuttingBehavior';
import Mixins from './Mixins';
import MixinProblems from './MixinProblems';
import Composition from './Composition';
import ComponentWrapper from './ComponentWrapper';
import ComponentDecorator from './ComponentDecorator';
import Styling from './Styling';
import InlineStyling from './InlineStyling';
import Namespacing from './Namespacing';
import NamespacingHelper from './NamespacingHelper';
import Other from './Other';
import Flux from './Flux';
import Repo from './Repo';

const slideComponents = [
  Intro,
  Why,
  What,
  Characteristics,
  DevEnvironment,
  ReactConf,
  StatefulApi,
  StatelessApi,
  StrictProps,
  Children,
  ElementProps,
  LiteralChildren,
  CrossCuttingBehavior,
  Mixins,
  MixinProblems,
  Composition,
  ComponentWrapper,
  ComponentDecorator,
  Flux,
  Styling,
  InlineStyling,
  Namespacing,
  NamespacingHelper,
  Other,
  Repo
];

export default slideComponents.map((SlideComponent, idx) => {
  return <SlideComponent key={ idx } />;
});
