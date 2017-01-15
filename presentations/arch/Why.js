import React from 'react';
import ListBlock from 'components/ListBlock';

const listItems = [
  '?',
];

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <ListBlock title="What" items={ listItems }/>
      </div>
    );
  }
}
