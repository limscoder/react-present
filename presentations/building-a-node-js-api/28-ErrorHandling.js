import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const code = `api.get('/api/music/charts', async(req, res) => {
  try {
    ...
    const user= await User.findById(userId);
    ...

  } catch (err) {
    logger.error(err);
    res.sendStatus(500); 
  }
});`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Error handling</h1>

        <CodeBlock id="code">
          {code}
        </CodeBlock>
      </div>
    );
  }
}
