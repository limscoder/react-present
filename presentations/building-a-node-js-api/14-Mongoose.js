import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const code = `const UserSchema = new mongoose.Schema({
  username: { 
    type: String, 
    unique: true, 
    required: true, 
    validate: usernameValidator 
  },
  password: { type: String, required: true },
  sortType: { type: Boolean },
  communication: [CommunicationSchema]
});
`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Mongoose</h1>

        <CodeBlock id="code">
          {code}
        </CodeBlock>
      </div>
    );
  }
}
