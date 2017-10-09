import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const code = `describe('hash field plugin', () => {
  it('should match identical user passwords', async() => {
    // given
    const sut = new User(testData.getRandomUser());
    const password = sut.password;

    // when
    await sut.save();
    
    // then
    const savedUser = await User.findOne(
      { username: sut.username }
    );
    
    const isMatch = await savedUser.verifyPassword(password);
    expect(isMatch).to.be.true);
  });
});`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Mongoose testing</h1>

        <CodeBlock id="code">
          {code}
        </CodeBlock>
      </div>
    );
  }
}
