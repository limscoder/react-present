import React from 'react';
import ListBlock from '../../lib/components/ListBlock';

export default function Slide() {
  const officialProps = {
    title: 'Official Platforms',
    items: [
      'iOS',
      'Android'
    ]
  };

  const communityProps = {
    title: 'Community Platforms',
    items: [
      'Universal Windows Platform (Windows, Windows Mobile, XBox)',
      'MacOS'
    ]
  };

  return (
    <div>
      <ListBlock { ...officialProps } />
      <br />
      <ListBlock { ...communityProps } />
    </div>
  );
}