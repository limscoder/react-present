import React from 'react';

import Intro from './Intro';
import DevopsDefinition1 from './DevopsDefinition1';
import DevopsDefinition2 from './DevopsDefinition2';
import Agile from './Agile';
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

const slideComponents = [
  Intro,
  DevopsDefinition1,
  DevopsDefinition2,
  Agile,
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
  TeamCaseStudy
];

export default slideComponents.map((SlideComponent, idx) => {
  return <SlideComponent key={idx} />;
});
