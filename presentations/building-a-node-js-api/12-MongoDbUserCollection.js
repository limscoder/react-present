import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const code = `[{
  "_id": ObjectId("5899ef79eb721b0399efd350"),
  "username": ...,
  "password": ...,
  "communication": [{
      "type": "phone",
      "details": {
        "info": "+41 79 123 1234",
        "order": 2
      }
    }, {
      "type": "email",
      "details": {
        "info": "snoop@dawg.com",
        "order": 1
      }
    }]
}]
`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>User collection</h1>

        <CodeBlock id="code">
          {code}
        </CodeBlock>
      </div>
    );
  }
}
