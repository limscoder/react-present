import React from 'react';
import ListBlock from 'components/ListBlock';

const listItems = [
  'What problem are we solving?',
  'What are the options?',
  'What is React?',
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
