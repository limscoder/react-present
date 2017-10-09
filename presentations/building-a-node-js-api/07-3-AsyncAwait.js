import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const code = `const authenticateUser = async function(req, res, next) {
  try {
    const query = { username: req.body.username };
    const password = req.body.password;

    const user = await User.findOne();
    if (user) {
      const isPasswordMatch = await user.verifyPassword(password);

      if (isPasswordMatch) {
        const token = await issueToken(user._id);
        res.status(200).send(token);
        return;
      }
    }
    res.status(401).send();
  } catch (err) {
    next(err);
  }
}`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Async / await</h1>

        <CodeBlock id="code">
          { code }
        </CodeBlock>
      </div>
    );
  }
}
