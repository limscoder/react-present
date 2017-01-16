import React from 'react';
import ListBlock from 'components/ListBlock';

const listItems = [
  'app.ui.show and lifecycles',
  '_page / _view / _form / _layout',
  'propagating state and options'
];

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <ListBlock title="The Problem" items={ listItems }/>
      </div>
    );
  }
}
