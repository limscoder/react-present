import React from 'react';

const notes = `
 * remember to make fun of angular
 * more notes
`;

export default class Slide extends React.Component {
  static notes = notes

  render() {
    return (
      <div>
        <h1>
          You won't believe these 10 weird tricks that React developers near you are using to create reusable components!
        </h1>
        <h3>Dave Thompson @limscoder</h3>
      </div>
    );
  }
}
