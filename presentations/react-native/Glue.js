import React from 'react';
import ListBlock from '../../lib/components/ListBlock';

export default function Slide() {
  const props = {
    title: 'Native UI + JS logic',
    items: [
      <span>Native UI widgets <span className="rcp-Highlight">-></span> React components</span>,
      <span>UI composed with <span className="rcp-Highlight">JSX</span> elements</span>,
      <span><span className="rcp-Highlight">JS</span> for state, data fetching, and other logic</span>
    ]
  };

  return <ListBlock { ...props } />;
}