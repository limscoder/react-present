import React from 'react';

const notes = `getting serious here`;

export default class Slide extends React.Component {
  static notes = notes

  render() {
    return (
      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/y7Jlh85SpAs?autoplay=1" frameborder="0" allowfullscreen={ true } />
      </div>
    );
  }
}
