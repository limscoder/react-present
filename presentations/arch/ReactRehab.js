import React from 'react';
import ListBlock from 'components/ListBlock';

const listItems = [
  'Only if you want to',
  'React takes ownership of DOM nodes',
  'Nesting components is trivial'
];

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <ListBlock title="Do I need to throw away my child?" items={ listItems }/>
      </div>
    );
  }
}
