import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const code = `var authenticateUser = function(req, res, next) {
  User.findOne({ username: req.body.username })
    .bind({})
    .then(function(user) {
      this.user = user;
      if (user) {
        return user.verifyPassword(req.body.password);
      }
      return false;
    })
    .then(function(isPasswordMatch) {
      if (isPasswordMatch) {
        return issueToken(this.user._id);
      }
      return null;
    })
    .then(function(token) {
      if (token) {
        return res.status(200).send(token);
      }
      res.status(401).send();
    })
    .catch(function(err) {
      next(err);
    });
}`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Promises</h1>

        <CodeBlock id="code">
          { code }
        </CodeBlock>
      </div>
    );
  }
}
