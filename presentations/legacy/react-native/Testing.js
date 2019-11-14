import React from 'react';
import ListBlock from '../../lib/components/ListBlock';

export default function Slide() {
  const props = {
    title: 'Testing',
    items: [
      <span>Native code -> native test frameworks</span>,
      <span>Test JS code with <span className="rcp-Highlight">Jest snapshots</span></span>
    ]
  };

  return <ListBlock { ...props } />;
}