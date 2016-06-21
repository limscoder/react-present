import React from 'react';

import Intro from './Intro';
import Reducks from './Reducks';
import Wtf from './Wtf';
import Glue from './Glue';
import Support from './Support';
import Present from './Present';
import JSX from './JSX';
import Styles from './Styles';
import RuntimePlatformCode from './RuntimePlatformCode';
import PlatformCode from './PlatformCode';
import NativeCode from './NativeCode';
import NativeComponents from './NativeComponents';
import Gestures from './Gestures';
import WebView from './WebView';
import Fetch from './Fetch';
import Reuse from './Reuse';
import Update from './Update';
import Testing from './Testing';
import Debugging from './Debugging';
import Distribution from './Distribution';
import ParticleSun from './ParticleSun';
import Outro from './Outro';

const slideComponents = [
  Intro,
  Reducks,
  Wtf,
  Glue,
  Support,
  Present,
  JSX,
  Styles,
  RuntimePlatformCode,
  PlatformCode,
  NativeCode,
  NativeComponents,
  Gestures,
  WebView,
  Fetch,
  Reuse,
  Debugging,
  Testing,
  Distribution,
  Update,
  ParticleSun,
  Outro
];

export default slideComponents.map((SlideComponent, idx) => {
  return <SlideComponent key={ idx } />;
});
