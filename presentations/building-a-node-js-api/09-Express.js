import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const code = `const api = express();

api.get ...
api.put ...

api.listen(port);
`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Express setup</h1>

        <CodeBlock id="code">
          {code}
        </CodeBlock>
      </div>
    );
  }
}
