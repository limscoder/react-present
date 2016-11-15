import React from 'react';
import ListBlock from '../../lib/components/ListBlock';

export default function Slide() {
  const props = {
    title: 'Component libraries',
    items: [
      'NativeBase',
      'React Native Elements',
      'MaterialKit'
    ]
  };

  return <ListBlock { ...props } />;
}