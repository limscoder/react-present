import React from 'react';
import ListBlock from '../../lib/components/ListBlock';

export default function Slide() {
  const reuseProps = {
    title: 'Reusable code',
    items: [
      'Redux reducers, selectors, and actions',
      'Data fetch logic'
    ]
  };

  const platformProps = {
    title: 'Isolate platform code',
    items: [
      'window...',
      'LocalStorage'
    ]
  };  

  return (
    <div>
      <ListBlock { ...reuseProps } />
      <ListBlock { ...platformProps } />
    </div>
  );
}
