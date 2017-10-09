import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const code = `db.users.find({"username": "abc"});

db.users.find({
  "$or": [
    { "communication.type": "phone" },
    { "communication.details.order": { "$lt": 2 } }
  ]
});
`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>MongoDb basics</h1>

        <CodeBlock id="code">
          {code}
        </CodeBlock>
      </div>
    );
  }
}
