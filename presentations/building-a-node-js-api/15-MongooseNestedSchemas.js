import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const code = `const CommunicationSchema = new mongoose.Schema({
  type: { 
    type: String, 
    enum: ['phone', 'email', 'twitter', 'facebook'], 
    required: true 
  },
  details: {
    info: mongoose.Schema.Types.Mixed, 
    order: { type: Number, required: true }
  }
});`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Nested schemas</h1>

        <CodeBlock id="code">
          {code}
        </CodeBlock>
      </div>
    );
  }
}
