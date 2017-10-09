import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const code = `const routeTestSetup = async function() {
  const result = await modelTestSetup();
  const initConfig = result.initConfig;
  const models = result.models;

  const api = new Api(initConfig, models);
  result.server = api.listen(4201);
  result.request = supertest('http://localhost:4201');

  return result;
}`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Test setup</h1>

        <CodeBlock id="code">
          {code}
        </CodeBlock>
      </div>
    );
  }
}
