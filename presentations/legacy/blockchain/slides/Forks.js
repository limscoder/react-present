import React from 'react';

import Background from '../../../../lib/components/presentation/Background';
import Title from '../../../../lib/components/presentation/Title';

import imgSrc from '../images/bitcoin-fork.png';

export default function () {
  return (
    <Background>
      <Title>Forks</Title>
      <img src={ imgSrc } alt="forks" />
    </Background>);
}
