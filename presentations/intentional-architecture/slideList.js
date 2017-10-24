import React from 'react';

import Intro from './Intro';
import FreshTracks from './FreshTracks';
import Rally from './Rally';
import Timeline from './Timeline';
import Stats from './Stats';
import DevopsDefinition1 from './DevopsDefinition1';
import DevopsDefinition2 from './DevopsDefinition2';
import Agile from './Agile';
import RallyOrg from './RallyOrg';
import EmergentArchitecture from './EmergentArchitecture';
import EmergentRequirements from './EmergentRequirements';
import ConwaysLaw from './ConwaysLaw';
import TeamGrowth from './TeamGrowth';
import ConwaysResult from './ConwaysResult';
import IntentionalArchitecture from './IntentionalArchitecture';
import IntentionalGoals from './IntentionalGoals';
import ArchitectTeam from './ArchitectTeam';
import IvoryTower from './IvoryTower';
import ArchitectRole from './ArchitectRole';
import BottomUp from './BottomUp';
import OrganizationConcerns from './OrganizationConcerns';
import TeamCaseStudy from './TeamCaseStudy';
import Shepherd from './Shepherd';
import Support from './Support';
import Retro from './Retro';
import Rollback from './Rollback';
import Flow from './Flow';
import Productivity from './Productivity';
import Frustrations from './Frustrations';
import Tests from './Tests';
import PlanForFuture from './PlanForFuture';
import NewTech from './NewTech';
import ArchitecturePlanning from './ArchitecturePlanning';
import Deployments from './Deployments';
import ContinuousIntegration from './ContinuousIntegration';
import Monitoring from './Monitoring';
import SupportTeam from './SupportTeam';
import PER from './PER';
import Change from './Change';
import Issues from './Issues';
import Thanks from './Thanks';

const slideComponents = [
  Intro,
  FreshTracks,
  Rally,
  Timeline,
  Stats,
  DevopsDefinition1,
  DevopsDefinition2,
  Agile,
  RallyOrg,
  EmergentArchitecture,
  EmergentRequirements,
  TeamGrowth,
  ConwaysLaw,
  ConwaysResult,
  IntentionalArchitecture,
  IntentionalGoals,
  ArchitectTeam,
  IvoryTower,
  ArchitectRole,
  BottomUp,
  OrganizationConcerns,
  TeamCaseStudy,
  Shepherd,
  Support,
  Retro,
  Rollback,
  Flow,
  Productivity,
  Frustrations,
  Tests,
  PlanForFuture,
  NewTech,
  ArchitecturePlanning,
  Deployments,
  ContinuousIntegration,
  Monitoring,
  SupportTeam,
  PER,
  Change,
  Issues,
  Thanks
];

export default slideComponents.map((SlideComponent, idx) => {
  return <SlideComponent key={idx} />;
});
