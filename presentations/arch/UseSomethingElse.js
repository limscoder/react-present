import React from 'react';
import ListBlock from 'components/ListBlock';

const listItems = [
  'How different is this from extracting mobile core?',
  'We havent implemented the unifying solution yet',
  'app.* and Investec.*'
];

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <ListBlock title="Use something else" items={ listItems }/>
      </div>
    );
  }
}
