import React from 'react';

import Background from '../../../lib/components/presentation/Background';
import Title from '../../../lib/components/presentation/Title';

import imgSrc from '../images/smart-contract.png';

export default function () {
  return (
    <Background>
      <Title>Ethereum Smart Contracts</Title>
      <img src={ imgSrc } alt="smart contract" />
    </Background>);
}
