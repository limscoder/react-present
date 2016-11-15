import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const swipeCode = `class SwipeableView extends Component {
  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder:
        (evt, gestureState) => true,
      ...
      onPanResponderRelease:
        (evt, gestureState) => {
          (gestureState.dx < 0 ? this.props.onSwipLeft :
            this.props.onSwipeRight)();
      }
    });
  }

  render() {
    return <View { ...this.panResponder.panHandlers }>;
  };
};`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Simple swipe implementation</h1>

        <CodeBlock>
          { swipeCode }
        </CodeBlock>
      </div>
    );
  }
}
