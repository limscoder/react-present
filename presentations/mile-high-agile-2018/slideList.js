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
} from '../../lib/components/presentation/Parts';

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
    </Slide>,
    <Slide>
      <Title>Dave Thompson</Title>
      <Statement>@limscoder</Statement>
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
      <Title>Respond to change</Title>
      <Delay>
        <Statement>market change</Statement>
        <Statement>product change</Statement>
        <Statement>customer change</Statement>
        <Statement>technology change</Statement>
      </Delay>
    </Slide>,
    <Slide>
      <Statement>Agile helps organizations respond to change.</Statement>
      <Statement>Architecture helps systems respond to change.</Statement>
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
      <Title>Success requirements</Title>
      <Statement>Small number of teams</Statement>
      <Statement>Limited communication paths</Statement>
      <Statement>Trust in dev team leads</Statement>
    </Slide>,
    <Slide>
      <Title>Growing organizations</Title>
      <img src={largeTeamSrc} alt="large team" />
    </Slide>,
    <Slide>
      <Title>Conway's Law</Title>
      <img src={ graphSrc } alt="graph" />
    </Slide>,
    <Slide>
      <Title>Case Study: too many cooks</Title>
      <img src={techBleedSrc} alt="tech overlap" />
    </Slide>,
    <Slide>
      <Title>Intentional Architecture</Title>
      <Statement>Manage communication channels</Statement>
      <Statement>Extend the runway</Statement>
      <Statement>Improve velocity</Statement>
      <Statement>Manage tech debt</Statement>
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
      <Statement>Ideas bubble up to architecture team</Statement>
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
      <Title>Architect role</Title>
      <Statement>Support team work</Statement>
      <Statement>Shepherd tech rollouts</Statement>
      <Statement>Manage tech debt</Statement>
      <Statement>Ensure successful deployments</Statement>
      <Statement>Nurture development environment</Statement>
    </Slide>,
    <Slide>
      <Title>How?</Title>
      <img src={ howSrc } alt="how?" />
    </Slide>,
    <Slide>
      <Title>Pull request</Title>
      <img src={ prSrc } alt="pull requests" />
    </Slide>,
    <Slide>
      <Title>Resolving design issues</Title>
      <Statement>Encourage individuals to propose solutions</Statement>
      <Statement>Empower teams with time to research</Statement>
      <Statement>Volunteer for pair programming</Statement>
    </Slide>,   
    <Slide>
      <Title>Case Study: team driven architecture</Title>
      <img src={ mineralSrc } alt="mineral ui" />
    </Slide>,
    <Slide>
      <Title>Shepherd technology changes</Title>
      <Statement>Respond to new technology, but...</Statement>
      <Delay>
        <Statement>Avoid hype driven development</Statement>
        <Statement>Due diligence instead</Statement>
        <img src={ improveSrc } alt="improve" />
      </Delay>
    </Slide>,
    <Slide>
      <Title>Evaluate new technologies and processes</Title>
      <img src={ hypeSrc } alt="hype" />
    </Slide>,
    <Slide>
      <Statement>Community support</Statement>
      <Statement>Performance and scalability</Statement>
      <Statement>Security</Statement>
      <Statement>Backwards compatibility</Statement>
      <Statement>Upgrade support</Statement>
      <Statement>Developer tooling</Statement>
      <Statement>Extensibility</Statement>
    </Slide>,
    <Slide>
      <Title>Evaluate risk</Title>
      <Statement>Cost of failure drives planning investment</Statement>
    </Slide>,
    <Slide>
      <Title>Story the work</Title>
      <img src={ spikeSrc } alt="spike" />
    </Slide>,
    <Slide>
      <Title>Plan the rollout</Title>
      <Statement>What need to be built?</Statement>
      <Statement>What needs to be integrated?</Statement>
      <Statement>What needs to be deprecated?</Statement>
    </Slide>,
    <Slide>
      <Title>Keep it simple</Title>
      <img src={ systemSrc } alt="system" />
    </Slide>,
    <Slide>
      <Statement>Optimize for the whole</Statement>
    </Slide>,
    <Slide>
      <Title>Take teams into account</Title>
      <Statement>What are the mental models within the org?</Statement>
      <Statement>What are the skill levels within the org?</Statement>
      <Statement>What training does the org need?</Statement>
    </Slide>,
    <Slide>
      <Title>Product/technology/pattern adoption</Title>
      <Statement>Requires a compelling story</Statement>
      <Statement>Teams <em>want</em> to use it</Statement>
    </Slide>,
    <Slide>
      <Title>Case Study: Clojure</Title>
      <Statement>Team spike</Statement>
      <Statement>Tech analysis</Statement>
      <Statement>Voluntary book club</Statement>
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
      <Title>Making contentious decisions</Title>
      <img src={ gavelSrc } alt="gavel" />
    </Slide>,
    <Slide>
      <Title>Consensus breaks down</Title>
      <img src={ pieSrc } alt="pie" />
    </Slide>,
    <Slide>
      <Title>Get personal</Title>
      <Statement>Teams and 1 - 1</Statement>
    </Slide>,
    <Slide>
      <Title>Explain the decision</Title>
      <Statement>Present from authority</Statement>
      <Statement>Relate to larger goals</Statement>
      <Statement>Be specific</Statement>
      <Statement>Respond to questions and feedback</Statement>
    </Slide>,
    <Slide>
      <Title>Ensure r + d morale</Title>
      <Statement>Everyone wants to get features shipped</Statement>
      <Statement>Devs want to work on career relevant tech</Statement>
    </Slide>,
    <Slide>
      <Title>Frustrations</Title>
      <Statement>Tech debt + legacy tech</Statement>
      <Statement>Long lead times</Statement>
      <Statement>Cumbersome or slow tooling</Statement>
    </Slide>,
    <Slide>
      <Title>Support the developer environment</Title>
      <img src={ teslaSrc } alt="tesla" />
    </Slide>,
    <Slide>
      <Title>Larger issues</Title>
      <Statement>Business wants to know roi</Statement>
      <Delay>
        <img src={ surveySrc } alt="survey" />
      </Delay>
    </Slide>,
    <Slide>
      <Title>Plan it!</Title>
      <Statement>Architecture team plans techdebt work</Statement>
      <img src={ planningSrc } alt="planning board" />
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
      <Title>DevOps</Title>
      <Statement>Development teams are responsible for when and how their features are deployed to customers.</Statement>
    </Slide>,
    <Slide>
      <Title>DevOps drives agile transformations</Title>
    </Slide>,
    <Slide>
      <Title>Ensure rapid and safe deployments</Title>
      <Statement>Rapid deployments reduce lead time</Statement>
      <Statement>Safety improves user experience</Statement>
      <Statement>Robust + repeatable CI/CD > more automation</Statement>
    </Slide>,
    <Slide>
      <Title>Culture of responsibility</Title>
      <Statement>Enable teams to observe their deployment health</Statement>
      <img src={ ftSrc } alt="freshtracks" />
    </Slide>,
    <Slide>
      <Title>When deployments break</Title>
      <Statement>Plan for quick reaction</Statement>
      <Statement>Seek process and technical improvements instead of blame</Statement>
      <Statement>Identify what went right the other times</Statement>
    </Slide>,
    <Slide>
      <Title>Case Study: recent outage</Title>
      <Delay>
        <Statement>Notified by alerts</Statement>
        <Statement>Used metrics to evaluate severity</Statement>
        <Statement>Debugged and remedied issue</Statement>
        <Statement>Retro: tests and protections for high customer load</Statement>
      </Delay>
    </Slide>,
    <Slide>
      <Title>Bring intelligent architecture to your organization</Title>
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
  ]
};