import React from 'react';
import ListBlock from 'components/ListBlock';

const listItems = [
  'It means learning (an afternoon? for Laura and Levente)',
  'Segmentation (how do we get to core?)'
];

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <ListBlock title="Cons" items={ listItems }/>
      </div>
    );
  }
}
