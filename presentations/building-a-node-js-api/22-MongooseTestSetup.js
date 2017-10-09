import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const code1 = `before(() => {
  return testUtil.modelTestSetup()
    .then(result => {
      initConfig = result.initConfig;
      User = result.models.User;
    });
});`;

const code2 = `const modelTestSetup = async function() {
  const ic = await initTestConfig();

  await dropCollection(ic.mongoose, 'users');
  ...

  const models = new Models(ic);

  return {
    initConfig: ic,
    models: models
  };

});`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Mongoose test setup</h1>

        <CodeBlock id="code1">
          {code1}
        </CodeBlock>

        <CodeBlock id="code2">
          {code2}
        </CodeBlock>
      </div>
    );
  }
}
