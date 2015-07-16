import React from 'react';
import Highlight from 'react-highlight';

const mixinCode = `
React.createClass({
  mixins: [ValidationMixin]

  ...
`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>That sounds like a mixin!</h1>

        <Highlight className="jsx">
          { mixinCode }
        </Highlight>
      </div>
    );
  }
}
