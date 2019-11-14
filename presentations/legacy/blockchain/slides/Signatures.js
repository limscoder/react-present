import React from 'react';

import Background from '../../../../lib/components/presentation/Background';
import Title from '../../../../lib/components/presentation/Title';

import signatureSrc from '../images/digital-signature-keys.png';

export default function () {
  return (
    <Background>
      <Title>Digital Signatures</Title>
      <img src={ signatureSrc } alt="digital signature" />
    </Background>);
}
