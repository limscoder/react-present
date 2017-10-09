import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const code1 = `after(() => {
  return testUtil.routeTestTeardown(server);
});`;

const code2 = `const routeTestTeardown = function(server) {
  return modelTestTeardown()
    .then(() => server.close());
}`;

const code3 = `const modelTestTeardown = function() {
  const mongoose = configuration.mongoose;
  mongoose.models = {};
  mongoose.modelSchemas = {};
  return mongoose.connection.close();
}`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Test tearDown</h1>

        <CodeBlock id="code1">
          {code1}
        </CodeBlock>

        <CodeBlock id="code2">
          {code2}
        </CodeBlock>

        <CodeBlock id="code3">
          {code3}
        </CodeBlock>
      </div>
    );
  }
}
