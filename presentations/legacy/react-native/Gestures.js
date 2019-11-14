import React from 'react';

import ListBlock from '../../lib/components/ListBlock';

export default function Slide() {
  const props = {
    title: 'Touch events and gestures',
    items: [
      <span>Taps: <span className="rcp-Highlight">TouchableHighlight</span></span>,
      <span>Lower-level touch: <span className="rcp-Highlight">PanResponder</span></span>,
      'May need to drop down to native level'
    ]
  };

  return <ListBlock { ...props } />;
}
