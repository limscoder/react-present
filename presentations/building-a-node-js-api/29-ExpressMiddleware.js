import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const code = `const api = express();

const handleErrors = (err, req, res, next) => {
  logger.error(err);
  ...
  res.sendStatus(code);
  next();
};

api.use(handleErrors);`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Express middleware</h1>

        <CodeBlock id="code">
          {code}
        </CodeBlock>
      </div>
    );
  }
}
