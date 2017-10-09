import React from 'react';

import css from 'style-loader!css-loader!./slides.css';

import Intro_01 from './01-Intro';
import Contents_02 from './02-Contents';
import WhatIsNodeJs_03 from './03-WhatIsNodeJs';
import NodeJsEventLoop_04 from './04-NodeJsEventLoop';
import HelloWorld_05 from './05-HelloWorld';
import JavaExample_06 from './06-JavaExample';
import ExpressApiExample_07 from './07-ExpressApiExample';
import Callbacks_07_1 from './07-1-Callbacks';
import Promises_07_2 from './07-2-Promises';
import AsyncAwait_07_3 from './07-3-AsyncAwait';
import NonBlockingIO_08 from './08-NonBlockingIO';
import Express_09 from './09-Express';
import Testing_10 from './10-Testing';
import SqlVsNoSql_11 from './11-SqlVsNoSql';
import MongoDbUserCollection_12 from './12-MongoDbUserCollection';
import MongoDbBasics_13 from './13-MongoDbBasics';
import Mongoose_14 from './14-Mongoose';
import MongooseNestedSchemas_15 from './15-MongooseNestedSchemas';
import MongooseValidation_16 from './16-MongooseValidation';
import MongooseSchemaMethods_17 from './17-MongooseSchemaMethods';
import MongooseSchemaPlugins_18 from './18-MongooseSchemaPlugins';
import MongoosePluginHashField_19 from './19-MongoosePluginHashField';
import MongoosePluginHashField_20 from './20-MongoosePluginHashField';
import MongooseTesting_21 from './21-MongooseTesting';
import MongooseTestSetup_22 from './22-MongooseTestSetup';
import TestSetup_23 from './23-TestSetup.js';
import TestConfiguration_24 from './24-TestConfiguration';
import TestTearDown_25 from './25-TestTearDown';
import TestingRevisited_26 from './26-TestingRevisited';
import ApiRevisited_27 from './27-ApiRevisited';
import ErrorHandling_28 from './28-ErrorHandling';
import ExpressMiddleware_29 from './29-ExpressMiddleware';
import CodeCoverage_30 from './30-CodeCoverage';
import ThankYou_33 from './33-ThankYou';

import JavascriptTheGoodParts from './JavascriptTheGoodParts';
import TellMeMore from './TellMeMore';
import JavascriptGuy from './JavascriptGuy';
import WriteTestsNotManyMostlyIntegration from './WriteTestsNotManyMostlyIntegration';

const slideComponents = [
  Intro_01,
  Contents_02,
  WhatIsNodeJs_03,
  NodeJsEventLoop_04,
  HelloWorld_05,
  JavaExample_06,
  ExpressApiExample_07,
  Callbacks_07_1,
  Promises_07_2,
  AsyncAwait_07_3,
  NonBlockingIO_08,
  JavascriptTheGoodParts,
  Express_09,
  Testing_10,
  SqlVsNoSql_11,
  MongoDbUserCollection_12,
  MongoDbBasics_13,
  Mongoose_14,
  MongooseNestedSchemas_15,
  MongooseValidation_16,
  MongooseSchemaMethods_17,
  MongooseSchemaPlugins_18,
  MongoosePluginHashField_19,
  MongoosePluginHashField_20,
  MongooseTesting_21,
  MongooseTestSetup_22,
  WriteTestsNotManyMostlyIntegration,
  TestSetup_23,
  TestConfiguration_24,
  TestTearDown_25,
  TestingRevisited_26,
  ApiRevisited_27,
  ErrorHandling_28,
  ExpressMiddleware_29,
  JavascriptGuy,
  CodeCoverage_30,
  ThankYou_33
];

export default slideComponents.map((SlideComponent, idx) => {
  return <SlideComponent key={ idx } />;
});
