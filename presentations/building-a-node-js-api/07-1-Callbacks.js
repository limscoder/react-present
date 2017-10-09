import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const code = `var authenticateUser = function(req, res, next) {
  
  var query = { username: req.body.username };

  User.findOne(query, function(errFindUser, user) {
    if (errFindUser) return next(errFindUser);

    if (user) {
      
      user.verifyPassword(req.body.password, function(errVerifyPassword, isPasswordMatch) {
        if (errVerifyPassword) return next(errVerifyPassword);

        if (isPasswordMatch) {
          issueToken(user._id, function(errIssueToken, token) {
            if (errIssueToken) return next(errIssueToken);

            res.status(200).send(token);
          });
          return;
        }
        
        res.status(401).send();
      });
      return;
    }
    
    res.status(401).send();
  });
}`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Callbacks</h1>

        <CodeBlock id="code">
          { code }
        </CodeBlock>
      </div>
    );
  }
}
