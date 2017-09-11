import React from 'react';

import Background from '../../../lib/components/presentation/Background';
import Title from '../../../lib/components/presentation/Title';

import imgSrc from '../images/ethereum.png';

export default function () {
  return (
    <Background>
      <Title>Ethereum - Turing Complete</Title>
      <img src={ imgSrc } alt="Ethereum" />
    </Background>);
}
