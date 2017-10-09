import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const code = `const mongooseHashField = function(schema, options) {
  const field = options && options.field;

  ...
  
  const hash = function(value) {
    return bcrypt.genSaltAsync(saltLength)
      .then(salt => {
        return bcrypt.hashAsync(value, salt, null);
      });
  };

  schema.methods[verificationFunctionName] = function(value) {
    return bcrypt.compareAsync(value, this[field]);
  };
}`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>HashField plugin</h1>

        <CodeBlock id="code">
          {code}
        </CodeBlock>
      </div>
    );
  }
}
