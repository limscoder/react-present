import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const nativeCode = `// extend RCTViewManager to expose IOS view
@interface ReactAvatarManager : RCTViewManager
@end

@implementation ReactAvatarManager

RCT_EXPORT_MODULE()
RCT_EXPORT_VIEW_PROPERTY(src, NSString)
RCT_EXPORT_METHOD(...)

- (UIView *)view
{
  return [[AvatarView alloc] init];
}

@end`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>IOS component</h1>

        <CodeBlock>
          { nativeCode }
        </CodeBlock>
      </div>
    );
  }
}
