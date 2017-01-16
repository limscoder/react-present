import React from 'react';
import ListBlock from 'components/ListBlock';

const listItems = [
  'Do nothing',
  'Fix app.ui, _page, _view, _form, _layout',
  'Use something else',
];

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <ListBlock title="The options" items={ listItems }/>
      </div>
    );
  }
}
