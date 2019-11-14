import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const nativeCode = `// Extend SimpleViewManager class to expose Android view
public class RctAvatarManager extends SimpleViewManager<AvatarView> {
  public AvatarView createViewInstance(ThemedReactContext context) {}

  @ReactProp(name = "src")
  public void setSrc(AvatarView view,
                     @Nullable String src) {}

  @Override
  public void updateView(AvatarView view,
                         ReadableMap props) {}
}`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Android component</h1>

        <CodeBlock width={ 1000 }>
          { nativeCode }
        </CodeBlock>
      </div>
    );
  }
}
