import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const nativeCode = `// Extend SimpleViewManager class to expose Android view
public class ReactAvatarManager extends SimpleViewManager<ReactAvatarView> {

  ...

  // Create view instance.
  @Override
  public ReactAvatarView createViewInstance(ThemedReactContext context) {
    return new ReactAvatarView(context, Fresco.newDraweeControllerBuilder(), mCallerContext);
  }

  // Map setter to React prop
  @ReactProp(name = "src")
  public void setSrc(ReactAvatarView view, @Nullable String src) {
    view.setSource(src);
  }

  // Update view when props change
  @Override
  public void updateView(ReactAvatarView view, ReadableMap props) {
    ...
  }
}
`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>How is a native component created?</h1>

        <CodeBlock>
          { nativeCode }
        </CodeBlock>
      </div>
    );
  }
}
