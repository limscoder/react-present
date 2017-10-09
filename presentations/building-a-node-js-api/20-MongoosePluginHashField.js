import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const code = `const mongooseHashField = function(schema, options) {
  
  ...

  schema.pre('save', function(next) {
    let obj = this;

    // Break out if no change
    if (!obj.isModified(field)) return next();

    hash(obj[field])
      .then(hash => {
        obj[field] = hash;
        next();
      })
      .catch(next);
  });
}`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>HashField plugin (contd)</h1>

        <CodeBlock id="code">
          {code}
        </CodeBlock>
      </div>
    );
  }
}
