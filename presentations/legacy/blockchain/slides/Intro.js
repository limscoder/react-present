import React from 'react';
import Background from '../../../../lib/components/presentation/Background';
import Link from '../../../../lib/components/presentation/Link';
import Title from '../../../../lib/components/presentation/Title';

export default function () {
  return (
    <Background>
      <Title>What the hell is a blockchain?</Title>
      <div><Link href="https://twitter.com/limscoder">@limscoder</Link></div>
      <div><Link href="https://github.com/limscoder">github.com/limscoder</Link></div>
    </Background>);
}
