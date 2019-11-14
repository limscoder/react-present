import React from 'react';
import CodeBlock from '../../../lib/components/CodeBlock';

const htmlCode = `const options = this.props.pets.map(
  (val, idx) => {return <option value={ idx }>val</option>}
};

<form>
  <label for="name">Name:</label>
  <input type="text" name="name" />

  <label for="pet">Favorite Pet:</label>
  <select name="pet">
    { options }
  </select>
</form>`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Break html out into components</h1>

        <CodeBlock id="html">
          { htmlCode }
        </CodeBlock>
      </div>
    );
  }
}
