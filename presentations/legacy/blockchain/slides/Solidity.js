import React from 'react';

import Background from '../../../../lib/components/presentation/Background';
import Title from '../../../../lib/components/presentation/Title';
import CodeBlock from '../../../../lib/components/CodeBlock';

const code = `contract GoatCoinContract {
  string public name = "GoatCoin";
  string public symbol = "GOAT";
  uint256 public tokenCount = 0;
  uint8 public decimals = 2;
  mapping (address => uint256) public tokenBalance;

  event Issue(address indexed _owner,
              address indexed _to, uint256 _value);
  event Transfer(address indexed _from,
                 address indexed _to, uint256 _value);

  function GoatCoin(uint256 _initialSupply) {
    tokenCount = _initialSupply;
    tokenBalance[msg.sender] = tokenCount;
  }

  // transfer tokens from one address to
  // another w/ no associated Ether payment
  function transferToken(address _to,
                         uint256 _transferAmount) {
    address sender = msg.sender;

    require(_transferAmount < tokenBalance[sender]);
    require(tokenBalance[_to] <
            tokenBalance[_to] + _transferAmount);

    tokenBalance[sender] -= _transferAmount;
    if (tokenBalance[sender] == 0) {
      delete tokenBalance[sender];
    }
    tokenBalance[_to] += _transferAmount;

    Transfer(sender, _to, _transferAmount);
  }
`;

export default function () {
  return (
    <Background>
      <Title>Solidity</Title>
      <CodeBlock>{ code }</CodeBlock>
    </Background>);
}
