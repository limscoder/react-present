import React from 'react';
import ListBlock from 'components/ListBlock';

const listItems = [
	'What do you know about react?',
	'What would you like to know?'
];

export default class Slide extends React.Component {
  render() {
    return (
      <div>
      	<ListBlock title="Rewrite" items={ listItems }/>
      </div>
    );
  }
}
