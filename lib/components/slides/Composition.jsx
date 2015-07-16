import React from 'react';
import Highlight from 'react-highlight';

const compositionCode = `
<Validator getValidationMessage={ numberValidator }>
  <NumberInput />
</Validator>

<Validator getValidationMessage={ colorValidator }>
  <ColorPicker />
</Validator>
`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Use composition instead</h1>

        <Highlight className="jsx">
          { compositionCode }
        </Highlight>
      </div>
    );
  }
}
