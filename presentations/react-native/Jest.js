import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const componentCode = `import React from 'react';
import renderer from 'react-test-renderer';
import AvatarPicker from '../AvatarPicker';

it('is swag', () => {
  const tree = renderer.create(
    <AvatarPicker swag={ true } />
  ).toJSON();
  
  expect(tree).toMatchSnapshot();
});`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Jest snapshots</h1>

        <CodeBlock>
          { componentCode }
        </CodeBlock>
      </div>
    );
  }
}
