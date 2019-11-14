import React from 'react';
import {
  Attribution,
  Code,
  Delay,
  Highlight,
  List,
  Slide,
  Statement,
  Title,
  Top
} from '../../../lib/components/presentation/Parts';

import beakerSrc from './images/beaker.png';
import agileSrc from './images/agile.png';
import ftSrc from './images/freshtracks.png';
import cfTeamSrc from './images/cross-functional-team.png';
import largeTeamSrc from './images/large-team.png';
import graphSrc from './images/graph.png';
import techBleedSrc from './images/tech-overlap.png';
import goalSrc from './images/architecture-goals.png';
import ivorySrc from './images/ivory-tower.jpg';
import arrowSrc from './images/arrow.png';
import alignmentSrc from './images/alignment.png';
import mineralSrc from './images/mineral.png'
import howSrc from './images/board.png'
import prSrc from './images/pr.png'
import hypeSrc from './images/hype_cycle.png'
import systemSrc from './images/system-graph.png'
import spikeSrc from './images/spike.png'
import improveSrc from './images/improve.png'
import integrateSrc from './images/integrate.png'
import gavelSrc from './images/gavel.png'
import pieSrc from './images/pie.png'
import teslaSrc from './images/tesla.png'
import surveySrc from './images/devsurvey.png'
import planningSrc from './images/planning.png'
import testSrc from './images/tests.png'
import performanceSrc from './images/perf-chart.png'

const flowCode =
`// @flow
function concat(a: string, b: string): string {
  return a + b;
}`;

export default {
  title: 'Intentional Architecture',
  align: 'top',
  slides: [
    <Slide>
      <Title>Intentional Architecture</Title>
      <Statement>Dave Thompson</Statement>
      <Statement>@limscoder</Statement>
    </Slide>,
    <Slide>
      <div><img src={ beakerSrc } alt="beaker" /></div>
      <div><img src={ agileSrc } alt="agile" /></div>
      <div><img src={ ftSrc } alt="freshtracks.io" /></div>
    </Slide>,
    <Slide>
      <Title>Agile</Title>
      <Statement>code &gt; plans and documentation</Statement>
      <Statement>rapid iterations &gt; large releases</Statement>
      <Statement>people &gt; processes</Statement>
      <Statement>trust &gt; control</Statement>
    </Slide>,
    <Slide>
      <Statement>Agile helps <Highlight>organizations</Highlight> continuously improve in dynamic environments</Statement>
      <Delay>
        <Statement>Architecture helps <Highlight>systems</Highlight> continuously improve in dynamic environments</Statement>
      </Delay>
    </Slide>,
    <Slide>
      <Title>System changes</Title>
      <img src={goalSrc} alt="architecture goals" />
    </Slide>,
    <Slide>
      <Title>Emergent architecture</Title>
      <Statement>All architecture decisions are made within teams.</Statement>
      <img src={cfTeamSrc} alt="small team" />
    </Slide>,
    <Slide>
      <Title>Conway's Law</Title>
      <img src={ graphSrc } alt="graph" />
    </Slide>,
    <Slide>
      <Title>Growing organizations</Title>
      <img src={largeTeamSrc} alt="large team" />
    </Slide>,
    <Slide>
      <Title>Case Study: too many cooks</Title>
      <img src={techBleedSrc} alt="tech overlap" />
    </Slide>,
    <Slide>
      <Title>Intentional Architecture</Title>
      <Statement>Manage <Highlight>communication channels</Highlight></Statement>
      <Statement>Respond to <Highlight>new technologies</Highlight></Statement>
      <Statement>Manage <Highlight>tech debt</Highlight></Statement>
      <Statement>Improve <Highlight>velocity</Highlight></Statement>
      <Statement>Ensure <Highlight>rapid code delivery</Highlight></Statement>
    </Slide>,
    <Slide>
      <Title>Who's an architect?</Title>
      <Statement>Authority for technical decisions</Statement>
      <Statement>Responsibility for system health</Statement>
    </Slide>,
    <Slide>
      <Title>Avoid the Ivory Tower</Title>
      <Statement>Teams are good at writing code</Statement>
      <Statement>Don't tell them how to do their job</Statement>
      <div><img src={ ivorySrc } alt="ivory tower" /></div>
      <Attribution>- Michael Vrazitoulis</Attribution>
    </Slide>,
    <Slide>
      <img src={ alignmentSrc } alt="alignment" />
    </Slide>,
    <Slide>
      <Title>Bottom up architecture</Title>
      <Statement>Teams need room to innovate novel solutions</Statement>
      <img src={ arrowSrc } alt="arrow" />
    </Slide>,
    <Slide>
      <Title>Organizational impacts</Title>
      <Statement>Training and hiring requirements</Statement>
      <Statement>Implementation and maintenance effort</Statement>
      <Statement>Licensing and hosting costs</Statement>
      <Statement>Disaster recover, security, internationalization, performance</Statement>
    </Slide>,
    <Slide>
      <Title>Establish <Highlight>communication channels</Highlight> within development workflow</Title>
    </Slide>,
    <Slide>
      <Title>How?</Title>
      <img src={ howSrc } alt="how?" />
    </Slide>,
    <Slide>
      <Title>Pull Requests</Title>
      <img src={ prSrc } alt="pull requests" />
    </Slide>,
    <Slide>
      <Title>Resolving design issues</Title>
      <Statement>Encourage individuals to propose solutions</Statement>
      <Statement>Empower teams with time to research</Statement>
      <Statement>Volunteer for pair programming</Statement>
    </Slide>,
    <Slide>
      <Title><Highlight>New technologies</Highlight> drive innovation</Title>
      <img src={ improveSrc } alt="improve" />
    </Slide>,
    <Slide>
      <Title>Evaluate risk</Title>
      <Statement>Cost of failure drives planning investment</Statement>
      <img src={ hypeSrc } alt="hype" />
    </Slide>,
    <Slide>
      <Statement>Community support</Statement>
      <Statement>Backwards compatibility and upgrade support</Statement>
      <Statement>Developer tooling</Statement>
      <Statement>Extensibility</Statement>
    </Slide>,
    <Slide>
      <Title>Performance</Title>
      <img src={ performanceSrc } alt="performance" />
    </Slide>,
    <Slide>
      <Title>Minimize complexity</Title>
      <img src={ systemSrc } alt="system" />
    </Slide>,
    <Slide>
      <Title>Plan for integration</Title>
      <Statement>What needs to be built?</Statement>
      <Statement>What needs to be deprecated?</Statement>
    </Slide>,
    <Slide>
      <Title>Story the questions</Title>
      <img src={ spikeSrc } alt="spike" />
    </Slide>,
    <Slide>
      <Title>Dealing with <Highlight>conflict</Highlight></Title>
      <img src={ pieSrc } alt="pie" />
    </Slide>,
    <Slide>
      <Title>Explain the decision</Title>
      <Statement>Present from authority</Statement>
      <Statement>Relate to larger goals</Statement>
      <Statement>Be specific</Statement>
      <Statement>Respond to questions and feedback</Statement>
    </Slide>,
    <Slide>
      <Title>Drive adoption</Title>
      <Statement>Requires a compelling story</Statement>
      <Statement>What are the mental models within the org?</Statement>
      <Statement>What are the skill levels within the org?</Statement>
      <Statement>What training does the org need?</Statement>
    </Slide>,
    <Slide>
      <Title>Case Study: Clojure</Title>
      <Statement>Team spike</Statement>
      <Statement>Tech analysis</Statement>
      <Statement>Voluntary training</Statement>
      <Statement>Template service</Statement>
    </Slide>,
    <Slide>
      <Title>Post-rollout retro</Title>
      <Statement>What work is left?</Statement>
      <Statement>How can we do better next time?</Statement>
      <Statement>Is it working as expected?</Statement>
    </Slide>,
      <Slide>
      <Title>Have a rollback plan</Title>
    </Slide>,
    <Slide>
      <Title>Case Study: Flowtype</Title>
      <Code>{ flowCode }</Code>
    </Slide>,
    <Slide>
      <Title><Highlight>Tech debt</Highlight> frustrations</Title>
      <Statement>Long lead times</Statement>
      <Statement>Expensive features</Statement>
      <Statement>Low morale</Statement>
    </Slide>,
    <Slide>
      <Title>How to prioritize tech debt?</Title>
      <Statement>challenge: validating roi</Statement>
      <Delay>
        <img src={ surveySrc } alt="survey" />
      </Delay>
    </Slide>,
    <Slide>
      <Title>Support the developer environment to improve <Highlight>velocity</Highlight></Title>
      <img src={ teslaSrc } alt="tesla" />
    </Slide>,
    <Slide>
      <Title>Case Study: too many tests</Title>
      <img src={ testSrc } alt="tests" />
    </Slide>,
    <Slide>
      <Title>Measuring velocity</Title>
      <Statement>completed work / time increment</Statement>
    </Slide>,
    <Slide>
      <Title><Highlight>DevOps</Highlight></Title>
      <Statement>Development teams are responsible for when and how their features are deployed to customers.</Statement>
    </Slide>,
    <Slide>
      <Title>Culture of responsibility</Title>
      <Statement>Enable teams to observe their deployment health</Statement>
      <img src={ ftSrc } alt="freshtracks" />
    </Slide>,
    <Slide>
      <Title>Bring intentional architecture to your organization</Title>
      <Delay>
        <Statement>Start small</Statement>
        <Statement>Establish communication channels</Statement>
        <Statement>Recognize and celebrate innovation</Statement>
      </Delay>
    </Slide>,
    <Slide>
      <Title>It's never perfect!</Title>
      <Statement>quickly adapt > "the perfect architecture"</Statement>
    </Slide>,
    <Slide>
      <Title>http://github.com/limscoder/react-present</Title>
    </Slide>,
  ]
};