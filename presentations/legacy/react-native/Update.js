import React from 'react';
import ListBlock from '../../lib/components/ListBlock';

export default function Slide() {
  const props = {
    title: 'Updating clients',
    items: [
      <span>Hot deploy <span className="rcp-Highlight">without an app store release</span></span>,
      'Microsoft CodePush',
      'Walmart Electrode OTA'
    ]
  };

  return <ListBlock { ...props } />;
}