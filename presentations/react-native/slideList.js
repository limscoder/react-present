import React from 'react';

import Intro from './Intro';
import Glue from './Glue';
import Support from './Support';
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
import Maturity from './Maturity';

const slideComponents = [
  Intro,
  Glue,
  Support,
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
  Update,
  Testing,
  Maturity
];

export default slideComponents.map((SlideComponent, idx) => {
  return <SlideComponent key={ idx } />;
});
