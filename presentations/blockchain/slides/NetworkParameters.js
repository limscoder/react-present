import React from 'react';

import Background from '../../../lib/components/presentation/Background';
import Title from '../../../lib/components/presentation/Title';

export default function () {
  return (
    <Background>
      <Title>Network Parameters</Title>
      <ul>
        <li>new blocks are generated every ~10 minues</li>
        <li>difficulty (number of zeros) adjusted every 2 weeks</li>
        <li>mining reward adjusted depending on coins in circulation</li>
      </ul>
    </Background>);
}
