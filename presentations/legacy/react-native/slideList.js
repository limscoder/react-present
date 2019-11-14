import React from 'react';

import Intro from './Intro';
import Reducks from './Reducks';
import Wtf from './Wtf';
import Glue from './Glue';
import Support from './Support';
import Present from './Present';
import ReactComponent from './ReactComponent';
import JSX from './JSX';
import NativeForm from './NativeForm';
import Styles from './Styles';
import Libraries from './Libraries';
import RuntimePlatformCode from './RuntimePlatformCode';
import PlatformCode from './PlatformCode';
import NativeCode from './NativeCode';
import CallNativeCode from './CallNativeCode';
import AndroidComponent from './AndroidComponent';
import IOSComponent from './IOSComponent';
import Gestures from './Gestures';
import PanResponder from './PanResponder';
import WebView from './WebView';
import StateManagement from './StateManagement';
import Fetch from './Fetch';
import Reuse from './Reuse';
import Update from './Update';
import Testing from './Testing';
import Jest from './Jest';
import Debugging from './Debugging';
import RunningOnDevice from './RunningOnDevice';
import Performance from './Performance';
import PerformanceFlameChart from './PerformanceFlameChart';
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
  ReactComponent,
  JSX,
  NativeForm,
  Styles,
  Libraries,
  RuntimePlatformCode,
  PlatformCode,
  NativeCode,
  CallNativeCode,
  AndroidComponent,
  IOSComponent,
  Gestures,
  PanResponder,
  WebView,
  StateManagement,
  Fetch,
  Reuse,
  RunningOnDevice,
  Debugging,
  Performance,
  PerformanceFlameChart,
  Testing,
  Jest,
  Distribution,
  Update,
  ParticleSun,
  Outro
];

export default slideComponents.map((SlideComponent, idx) => {
  return <SlideComponent key={ idx } />;
});
