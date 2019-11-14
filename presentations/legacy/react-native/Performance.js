import React from 'react';
import ListBlock from '../../lib/components/ListBlock';

export default function Slide() {
  const props = {
    title: 'What about performance?',
    items: [
      <span>profile Android: <span className="rcp-Highlight">systrace</span></span>,
      <span>profile iOS: <span className="rcp-Highlight">Instruments</span></span>
    ]
  };

  return <ListBlock { ...props } />;
}