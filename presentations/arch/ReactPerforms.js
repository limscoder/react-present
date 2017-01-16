import React from 'react';
import ListBlock from 'components/ListBlock';

const listItems = [
  'Virtual DOM',
  'shouldComponentUpdate()',
  'react-pure-render'
];

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <ListBlock title="Performance" items={ listItems }/>
      </div>
    );
  }
}
