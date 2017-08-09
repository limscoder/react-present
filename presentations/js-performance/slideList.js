import React from 'react';

import Intro from './Intro';
import KnuthQuote from './KnuthQuote';
import KnuthQuoteRevised from './KnuthQuoteRevised';
import Abandonment from './Abandonment';
import CostGuesstimate from './CostGuesstimate';
import DaveQuote from './DaveQuote';
import Measurement from './Measurement';
import UserExpectation from './UserExpectation';
import Sparkle from './Sparkle';
import Rail from './Rail';
import Load from './Load';
import Idle from './Idle';
import Response from './Response';
import Animation from './Animation';
import Plan from './Plan';
import OptimizeLoad from './OptimizeLoad';
import LargeImage from './LargeImage';
import OptimizeNetwork from './OptimizeNetwork';
import RemoveSequential from './RemoveSequential';
import SequentialCode from './SequentialCode';
import ParallelCode from './ParallelCode';
import LazyCode from './LazyCode';
import OptimizeResponse from './OptimizeResponse';
import OptimizeIdle from './OptimizeIdle';
import OptimizeFramerate from './OptimizeFramerate';
import SlowAnimationCode from './SlowAnimationCode';
import FasterAnimationCode from './FasterAnimationCode';
import OptimizedApp from './OptimizedApp';
import WebPageTest from './WebPageTest';
import PageSpeedTools from './PageSpeedTools';
import RealLife from './RealLife';
import FrameworkSpecific from './FrameworkSpecific';
import Resources from './Resources';
import Summary from './Summary';

const slideComponents = [
  Intro,
  KnuthQuote,
  KnuthQuoteRevised,
  Abandonment,
  CostGuesstimate,
  DaveQuote,
  Measurement,
  UserExpectation,
  Rail,
  Sparkle,
  Load,
  Idle,
  Response,
  Animation,
  Plan,
  OptimizeLoad,
  LargeImage,
  OptimizeNetwork,
  RemoveSequential,
  SequentialCode,
  ParallelCode,
  LazyCode,
  OptimizeResponse,
  OptimizeIdle,
  OptimizeFramerate,
  SlowAnimationCode,
  FasterAnimationCode,
  OptimizedApp,
  RealLife,
  WebPageTest,
  PageSpeedTools,
  FrameworkSpecific,
  Resources,
  Summary
];

export default slideComponents.map((SlideComponent, idx) => {
  return <SlideComponent key={idx} />;
});
