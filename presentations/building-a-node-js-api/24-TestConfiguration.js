import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const code = `const initTestConfig = async function() {
  try {
    const services = {};
    services.tagService = await TagService.fromFile();
    
    ...

    const initConfig = await configuration.init( ... );
    
    await initConfig.initPostgres(testPostgresDb);
    await initConfig.initMongo(
      { mongoDbName: testDb, autoIndex: false }
    );

    return initConfig;
  } catch (err => {
    logger.error('Could not initialize test config,', err);
    process.exit();
  });
}`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Test configuration</h1>

        <CodeBlock id="code">
          {code}
        </CodeBlock>
      </div>
    );
  }
}
