import React from 'react';

import Intro from './slides/Intro';
import Crypto from './slides/Crypto';
import Transaction from './slides/Transaction';
import Signatures from './slides/Signatures';
import DoubleSpend from './slides/DoubleSpend';
import BeforeBitcoin from './slides/BeforeBitcoin';
import BitcoinNetwork from './slides/BitcoinNetwork';
import Ledger from './slides/Ledger';
import Blockchain from './slides/Blockchain';
import Mining from './slides/Mining';
import MineTransation from './slides/MineTransaction';
import BlockBroadcast from './slides/BlockBroadcast';
import NetworkParameters from './slides/NetworkParameters';
import Forks from './slides/Forks';
import TransactionDetails from './slides/TransactionDetail';
import Ethereum from './slides/Ethereum';
import SmartContract from './slides/SmartContract';
import Solidity from './slides/Solidity';
import Uses from './slides/Uses';
import Links from './slides/Links';

const slideComponents = [
  Intro,
  Crypto,
  Transaction,
  Signatures,
  DoubleSpend,
  BeforeBitcoin,
  BitcoinNetwork,
  Ledger,
  Blockchain,
  Mining,
  MineTransation,
  BlockBroadcast,
  NetworkParameters,
  Forks,
  TransactionDetails,
  Ethereum,
  SmartContract,
  Solidity,
  Uses,
  Links
];

export default slideComponents.map((SlideComponent, idx) => {
  return <SlideComponent key={idx} />;
});
