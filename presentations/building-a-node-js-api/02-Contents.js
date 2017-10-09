import React from 'react';

// import ListBlock from '../../lib/components/ListBlock';

/*
export default function Slide() {
  const props = {
    title: 'Topics',
    items: [
      <span>ES2015</span>,
      <span>Express REST framework</span>,
      <span>MongoDb</span>,
      <span>Testing using superagent</span>
    ]
  };

  return <ListBlock { ...props } />;
}
*/

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Topics</h1>

        <ul>
          <li>ES2015</li>
          <li>Node.js express REST framework</li>
          <li>MongoDb using mongoose</li>
          <li>Testing using superagent</li>
        </ul>
      </div>
    );
  }
}
