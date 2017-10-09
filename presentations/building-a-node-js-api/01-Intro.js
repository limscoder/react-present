import React from 'react';

// import readingWordForWord from './images/reading-word-for-word.png';
import readSlides from './images/read-slides.jpg';

export default class Slide extends React.Component {

  render() {
    return (
      <div>
        <h1>Building an API in Node.js using Express and MongoDb</h1>
        <img src={readSlides}/>
      </div>
    );
  }
}
