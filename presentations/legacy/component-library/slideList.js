import React from 'react';

import Intro from './Intro';
import Characteristics from './Characteristics';
import DevEnvironment from './DevEnvironment';
import StatefulApi from './StatefulApi';
import StatelessApi from './StatelessApi';
import ImmutableProps from './ImmutableProps';
import StrictProps from './StrictProps';
import ReactConf from './ReactConf';
import Html from './Html';
import Children from './Children';
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
import AppState from './AppState';
import Repo from './Repo';

const slideComponents = [
  Intro,
  Characteristics,
  DevEnvironment,
  ReactConf,
  StatefulApi,
  StatelessApi,
  ImmutableProps,
  StrictProps,
  Html,
  Children,
  LiteralChildren,
  CrossCuttingBehavior,
  Mixins,
  MixinProblems,
  Composition,
  ComponentWrapper,
  ComponentDecorator,
  Styling,
  InlineStyling,
  Namespacing,
  NamespacingHelper,
  AppState,
  Other,
  Repo
];

export default slideComponents.map((SlideComponent, idx) => {
  return <SlideComponent key={ idx } />;
});
