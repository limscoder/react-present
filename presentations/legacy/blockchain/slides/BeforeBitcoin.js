import React from 'react';

import Background from '../../../../lib/components/presentation/Background';
import Title from '../../../../lib/components/presentation/Title';

import imgSrc from '../images/server.png';

export default function () {
  return (
    <Background>
      <Title>Before Bitcoin</Title>
      <img src={ imgSrc } alt="central server" />
    </Background>);
}
