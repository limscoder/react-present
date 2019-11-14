import React from 'react';

import Background from '../../../../lib/components/presentation/Background';
import Title from '../../../../lib/components/presentation/Title';

import imgSrc from '../images/bitcoin-mine-transaction.png';

export default function () {
  return (
    <Background>
      <Title>Miners Get Rewards</Title>
      <img src={ imgSrc } alt="$$$" />
    </Background>);
}
