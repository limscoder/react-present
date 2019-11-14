import React from 'react';

import Background from '../../../../lib/components/presentation/Background';
import Title from '../../../../lib/components/presentation/Title';

export default function () {
  return (
    <Background>
      <Title>Network Synchronization</Title>
      <ul>
        <li>newly mined blocks are sent for validation by other nodes</li>
        <li>network follows longest available chain to resolve conflicts</li>
        <li>older blocks are more secure</li>
      </ul>
    </Background>);
}
