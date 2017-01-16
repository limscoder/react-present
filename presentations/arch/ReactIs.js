import React from 'react';
import ListBlock from 'components/ListBlock';

const listItems = [
  'A Javascript Library For Building User Interfaces',
  'The \'V\' in MVC',
  'Pretty fast'
];

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <ListBlock title="What is React" items={ listItems }/>
        <a href="http://jsfiddle.net/tiagorg/5L9qxnsq/">check fiddle performance</a>
      </div>
    );
  }
}
