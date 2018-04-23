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
import mineralSrc from './images/mineral.png'
import howSrc from './images/board.png'
import prSrc from './images/pr.png'

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
      <Title>Bottom up architecture</Title>
      <Statement>Teams need room to innovate novel solutions</Statement>
      <Statement>Ideas bubble up to architecture team</Statement>
      <img src={arrowSrc} alt="arrow" />
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
      <Title>Shepherd new tech</Title>
      <Statement>Avoid hype driven development</Statement>
      <Statement>Due diligence instead</Statement>
    </Slide>
  ]
};