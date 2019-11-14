import React from 'react';

export default function Delay(props) {
  const classes = ['rcp-Delay'];
  if (props.show) {
    classes.push('rcp-Delay--visible');
  } else {
    classes.push('rcp-Delay--hidden');
  }

  return <div className={ classes.join(' ') }>{ props.children }</div>
}