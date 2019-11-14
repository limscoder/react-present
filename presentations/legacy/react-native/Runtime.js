import React from 'react';
import ListBlock from '../../lib/components/ListBlock';

export default function Slide() {
  const props = {
    title: 'Runtime',
    items: [
      <span>Mix of <span className="rcp-Highlight">ES6</span>, <span className="rcp-Highlight">ES7</span>, and <span className="rcp-Highlight">JSX</span></span>,
      'Platform dependent runtime'
    ]
  };

  return <ListBlock { ...props } />;
}