import React from 'react';

import Background from '../../../../lib/components/presentation/Background';
import Title from '../../../../lib/components/presentation/Title';

import imgSrc from '../images/bitcoin-ledger.png';

export default function () {
  return (
    <Background>
      <Title>Complete Transaction History</Title>
      <img src={ imgSrc } alt="transaction history" />
    </Background>);
}
