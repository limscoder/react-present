import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>model meta-data</h1>

        <ul>
          <li>model meta-data (<code>typedef</code> and <code>attributedef</code> names) are often displayed directly to users</li>
          <li>TreeGrid, Cardboard, EDP, TPS, old detail, old editors</li>
          <li>translate on server by adding <code>localizedDisplayName</code> field to <code>typedef</code> and <code>attributedef</code> objects?</li>
          <li>or translate on client?</li>
        </ul>

      </div>
    );
  }
}
