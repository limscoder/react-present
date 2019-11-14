import React from 'react';

import Background from '../../../../lib/components/presentation/Background';
import Title from '../../../../lib/components/presentation/Title';
import Atribution from '../../../../lib/components/presentation/Attribution';

import imgSrc from '../images/peer_to_peer.png';

export default function () {
  return (
    <Background>
      <Title>Peer-to-Peer Distributed Ledger</Title>
      <img src={ imgSrc } alt="peer to peer" />
      <Atribution>Satoshi Nakamoto: Oct 2008/Jan 2009</Atribution>
    </Background>);
}
