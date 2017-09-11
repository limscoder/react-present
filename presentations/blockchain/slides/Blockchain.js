import React from 'react';

import Background from '../../../lib/components/presentation/Background';
import Title from '../../../lib/components/presentation/Title';

import imgSrc from '../images/blockchain.png';

export default function () {
  return (
    <Background>
      <Title>Blockchain</Title>
      <img src={ imgSrc } alt="blockchain" />
    </Background>);
}
