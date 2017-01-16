import React from 'react';
import ListBlock from 'components/ListBlock';

const listItems = [
  'A javascript framework',
  'Doesnt come with the \'VC\' in MVC'
];

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <ListBlock title="What React is not" items={ listItems }/>
      </div>
    );
  }
}
