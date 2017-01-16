import React from 'react';
import ListBlock from 'components/ListBlock';

const listItems = [
  'Hot Reloadigngngn',
  'Minimal learning curve',
  'Solid lifecycle'
];

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <ListBlock title="Some bonuses" items={ listItems }/>
      </div>
    );
  }
}
