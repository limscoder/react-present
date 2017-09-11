import React from 'react';

import Background from '../../../lib/components/presentation/Background';
import Title from '../../../lib/components/presentation/Title';

import transactionSrc from '../images/bitcoin-double-spend.png';

export default function () {
  return (
    <Background>
      <Title>Double Spend</Title>
      <img src={ transactionSrc } alt="double spend" />
    </Background>);
}
